// npm run sync-uploads
// Copies photos/videos you uploaded in the admin panel on this computer (server/uploads)
// into client/public/uploads, so they are part of the website when you push to GitHub / Vercel.
import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../src/config.js';

let copied = 0, skipped = 0;
for (const kind of ['images', 'videos']) {
  const from = path.join(config.uploadDir, kind), to = path.join(config.publicUploadDir, kind);
  await fs.mkdir(to, { recursive: true });
  for (const f of await fs.readdir(from).catch(() => [])) {
    const dest = path.join(to, f);
    try { await fs.access(dest); skipped++; } catch { await fs.copyFile(path.join(from, f), dest); copied++; }
  }
}
console.log(`Copied ${copied} new file(s) to client/public/uploads (${skipped} already there).`);
console.log('Now commit and push:  git add . && git commit -m "Add media" && git push');
