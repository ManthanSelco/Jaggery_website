import { Router } from 'express';
import multer from 'multer';
import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';
import { Media } from '../models/Media.js';
import { Slot } from '../models/Slot.js';
import { requireAdmin } from '../middleware/auth.js';

const r = Router();
r.use(requireAdmin);

const tmpDir = path.join(config.uploadDir, 'tmp');
await fs.mkdir(tmpDir, { recursive: true });

const VIDEO_EXT = /\.(mp4|mov|m4v|webm|mkv|avi|3gp|mts|wmv)$/i;
const IMAGE_EXT = /\.(jpe?g|png|webp|gif|heic|heif|avif|tiff?|bmp)$/i;
function kindOf(file) {
  if (file.mimetype.startsWith('video/') || VIDEO_EXT.test(file.originalname)) return 'video';
  if (file.mimetype.startsWith('image/') || IMAGE_EXT.test(file.originalname)) return 'image';
  return null;
}

const upload = multer({
  dest: tmpDir,
  limits: { fileSize: config.maxUploadMb * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (kindOf(file)) cb(null, true);
    else cb(new Error('Only image or video files can be uploaded'));
  },
});

r.get('/', async (req, res) => {
  const filter = req.query.type ? { type: req.query.type } : {};
  res.json(await Media.find(filter).sort({ createdAt: -1 }).limit(500).lean());
});

const NO_UPLOADS = 'Uploading files is switched off on Vercel (it has no permanent disk). Upload on your own computer (npm run dev), then run "npm run sync-uploads", commit and push. Or use "Image link" / "YouTube link" here.';

r.post('/', (req, res, next) => (config.isVercel ? res.status(501).json({ error: NO_UPLOADS }) : next()), (req, res, next) => upload.single('file')(req, res, err => {
  if (err) return res.status(400).json({ error: err.code === 'LIMIT_FILE_SIZE' ? `File is bigger than ${config.maxUploadMb} MB` : err.message });
  next();
}), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file received' });
  const tmp = req.file.path;
  try {
    const isVideo = kindOf(req.file) === 'video';
    const { processImage, processVideo } = await import('../utils/processMedia.js'); // sharp + ffmpeg, loaded only when needed
    const result = isVideo
      ? await processVideo(tmp, { mute: req.body.mute === 'true', rotate: String(req.body.rotate || '0') })
      : await processImage(tmp);
    const media = await Media.create({
      type: isVideo ? 'video' : 'image', ...result,
      originalName: req.file.originalname, sizeBefore: req.file.size,
    });
    res.status(201).json(media);
  } catch (e) {
    console.error(e);
    res.status(422).json({ error: e.message || 'Could not process this file' });
  } finally {
    fs.unlink(tmp).catch(() => {});
  }
});

r.delete('/:id', async (req, res) => {
  const media = await Media.findById(req.params.id);
  if (!media) return res.status(404).json({ error: 'Not found' });
  const used = await Slot.find({ 'items.src': media.src }).select('slotId').lean();
  if (used.length) return res.status(409).json({ error: 'Still used in: ' + used.map(u => u.slotId).join(', ') });
  for (const url of [media.src, media.poster].filter(Boolean)) {
    if (url.startsWith('/uploads/')) await fs.unlink(path.join(config.uploadDir, url.replace('/uploads/', ''))).catch(() => {});
  }
  await media.deleteOne();
  res.json({ ok: true });
});

export default r;
