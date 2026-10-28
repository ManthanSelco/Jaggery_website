// Fills the database with every media box of the website and the media already added.
//   npm run seed           -> adds missing boxes + new seed photos/videos; keeps everything you uploaded, never duplicates
//   npm run seed -- --reset -> puts every box back to the original seed content
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';
import { config } from '../src/config.js';
import { Slot } from '../src/models/Slot.js';
import { Media } from '../src/models/Media.js';
import { Admin } from '../src/models/Admin.js';
import { explainDbError } from '../src/utils/dbHelp.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const reset = process.argv.includes('--reset');

try {
  await mongoose.connect(config.mongoUri, { serverSelectionTimeoutMS: 20000 });
} catch (err) {
  console.error(explainDbError(err, config.mongoUri));
  process.exit(1);
}
console.log('Connected to MongoDB');

// 1. media files that ship with the website (client/public/uploads) go into the media library
for (const kind of ['images', 'videos']) {
  const dir = path.join(config.publicUploadDir, kind);
  for (const f of await fs.readdir(dir).catch(() => [])) {
    if (kind === 'videos' && !f.endsWith('.mp4')) continue;
    const src = `/uploads/${kind}/${f}`;
    const st = await fs.stat(path.join(dir, f));
    const poster = kind === 'videos' ? src.replace(/\.mp4$/, '.jpg') : undefined;
    await Media.updateOne({ src }, { $setOnInsert: { type: kind === 'videos' ? 'video' : 'image', src, poster, originalName: f, sizeBefore: st.size, sizeAfter: st.size } }, { upsert: true });
  }
}

// 2. media boxes
const slots = JSON.parse(await fs.readFile(path.join(here, 'slots.json'), 'utf8'));
const keyOf = it => it.type === 'youtube' ? `yt:${it.youtubeId}` : `${it.type}:${it.src}`;
let created = 0, updated = 0, added = 0;
for (const [i, s] of slots.entries()) {
  const base = { page: s.page, pageRoute: s.pageRoute, kind: s.kind, label: s.label, order: i };
  const existing = await Slot.findOne({ slotId: s.slotId });
  const seedKeys = s.items.map(keyOf);
  if (!existing) { await Slot.create({ slotId: s.slotId, ...base, items: s.items, seedKeys }); created++; continue; }
  Object.assign(existing, base);
  // forceItems: this box's photo was swapped on purpose; replace it once, even in an existing database
  const swap = s.forceItems && s.items.length && !(existing.seedKeys || []).includes(keyOf(s.items[0]));
  if (reset || swap) existing.items = s.items;
  else {
    // add only seed items that are not in the box yet and were never offered before
    const have = new Set([...existing.items.map(keyOf), ...(existing.seedKeys || [])]);
    // keep the seed order: a new item goes to the same position it has in slots.json
    s.items.forEach((it, i) => {
      if (have.has(keyOf(it))) return;
      existing.items.splice(Math.min(i, existing.items.length), 0, it); added++;
    });
  }
  existing.seedKeys = [...new Set([...(existing.seedKeys || []), ...seedKeys])];
  await existing.save(); updated++;
}
const removed = await Slot.deleteMany({ slotId: { $nin: slots.map(s => s.slotId) } });
console.log(`Media boxes: ${created} created, ${updated} updated, ${added} new photos/videos added${removed.deletedCount ? `, ${removed.deletedCount} removed` : ''}${reset ? ' (reset to original content)' : ''}`);

// 3. admin login
const email = (process.env.ADMIN_EMAIL || '').toLowerCase().trim();
const password = process.env.ADMIN_PASSWORD || '';
if (!email || password.length < 8) {
  console.warn('Skipping admin: set ADMIN_EMAIL and ADMIN_PASSWORD (8+ characters) in server/.env');
} else {
  const admin = await Admin.findOne({ email });
  if (!admin) { await Admin.create({ email, passwordHash: await Admin.hash(password) }); console.log('Admin created:', email); }
  else if (process.argv.includes('--reset-password')) { admin.passwordHash = await Admin.hash(password); await admin.save(); console.log('Admin password updated'); }
  else console.log('Admin already exists:', email);
}

await mongoose.disconnect();
console.log('Done');
