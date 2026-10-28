// Compresses uploads so the website stays fast:
//  - images: auto-rotated, max 1600px wide, WebP
//  - videos: H.264 MP4, short side max 720px, max 30 fps, web-optimised, plus a JPG poster
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import crypto from 'node:crypto';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';
import { config } from '../config.js';

const newName = () => Date.now().toString(36) + '-' + crypto.randomBytes(4).toString('hex');

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const p = spawn(ffmpegPath, ['-hide_banner', '-loglevel', 'error', '-y', ...args]);
    let err = '';
    p.stderr.on('data', d => { err += d; });
    p.on('error', reject);
    p.on('close', code => (code === 0 ? resolve() : reject(new Error('Video processing failed: ' + err.slice(-400)))));
  });
}

export async function processImage(tmpPath) {
  const dir = path.join(config.uploadDir, 'images');
  await fs.mkdir(dir, { recursive: true });
  const file = newName() + '.webp';
  const out = path.join(dir, file);
  const info = await sharp(tmpPath).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
  return { src: `/uploads/images/${file}`, width: info.width, height: info.height, sizeAfter: info.size };
}

const ROTATE = { '90': 'transpose=1,', '-90': 'transpose=2,', '180': 'transpose=1,transpose=1,' };

export async function processVideo(tmpPath, { mute = false, rotate = '0' } = {}) {
  const dir = path.join(config.uploadDir, 'videos');
  await fs.mkdir(dir, { recursive: true });
  const base = newName();
  const out = path.join(dir, base + '.mp4');
  const poster = path.join(dir, base + '.jpg');
  const scale = "scale='if(gt(iw,ih),-2,min(720,iw))':'if(gt(iw,ih),min(720,ih),-2)'";
  await runFfmpeg([
    '-i', tmpPath,
    '-vf', `${ROTATE[rotate] || ''}${scale},format=yuv420p`,
    '-fpsmax', '30',
    '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '27', '-profile:v', 'high',
    ...(mute ? ['-an'] : ['-c:a', 'aac', '-b:a', '96k', '-ac', '1']),
    '-movflags', '+faststart',
    out,
  ]);
  try {
    await runFfmpeg(['-ss', '1', '-i', out, '-frames:v', '1', '-q:v', '4', poster]);
  } catch {
    await runFfmpeg(['-i', out, '-frames:v', '1', '-q:v', '4', poster]);
  }
  const st = await fs.stat(out);
  return { src: `/uploads/videos/${base}.mp4`, poster: `/uploads/videos/${base}.jpg`, sizeAfter: st.size };
}
