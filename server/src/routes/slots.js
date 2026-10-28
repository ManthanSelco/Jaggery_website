import { Router } from 'express';
import { Slot } from '../models/Slot.js';
import { requireAdmin } from '../middleware/auth.js';

export const publicSlots = Router();
export const adminSlots = Router();

// Public: media for one page -> { slotId: items[] }
publicSlots.get('/', async (req, res) => {
  const page = String(req.query.page || '');
  if (!page) return res.status(400).json({ error: 'page is required' });
  const slots = await Slot.find({ page }).select('slotId items -_id').lean();
  res.set('Cache-Control', 'public, max-age=30');
  res.json(Object.fromEntries(slots.map(s => [s.slotId, s.items])));
});

adminSlots.use(requireAdmin);

adminSlots.get('/', async (req, res) => {
  const slots = await Slot.find().sort({ page: 1, order: 1 }).lean();
  res.json(slots);
});

const clean = it => {
  const o = { type: it.type, title: it.title || '', caption: it.caption || '' };
  if (it.type === 'youtube') o.youtubeId = parseYouTubeId(it.youtubeId || it.src || '');
  else { o.src = it.src; if (it.poster) o.poster = it.poster; }
  if (it.button) o.button = it.button;
  if (it.credit && (it.credit.text || it.credit.url)) o.credit = { text: it.credit.text || '', url: it.credit.url || '' };
  return o;
};

export function parseYouTubeId(v) {
  v = String(v).trim();
  if (/^[\w-]{11}$/.test(v)) return v;
  const m = v.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/|vid:)([\w-]{11})/);
  return m ? m[1] : v;
}

adminSlots.put('/:slotId', async (req, res) => {
  const slot = await Slot.findOne({ slotId: req.params.slotId });
  if (!slot) return res.status(404).json({ error: 'Media box not found' });
  const items = Array.isArray(req.body?.items) ? req.body.items.slice(0, 12).map(clean) : null;
  if (!items) return res.status(400).json({ error: 'items must be a list' });
  slot.items = items;
  try {
    await slot.save();
  } catch (e) {
    return res.status(400).json({ error: e.message.replace(/^.*?: /, '') });
  }
  res.json(slot);
});
