// npm --prefix server run check-db  →  tests the MongoDB connection in server/.env and says what to fix.
import 'dotenv/config';
import mongoose from 'mongoose';
import { explainDbError } from '../src/utils/dbHelp.js';

const uri = (process.env.MONGODB_URI || '').trim();
if (!uri) { console.error('MONGODB_URI is empty in server/.env'); process.exit(1); }
console.log('Connecting to', uri.replace(/\/\/([^:]+):[^@]*@/, '//$1:****@'));
try {
  const ip = await fetch('https://api.ipify.org').then(r => r.text());
  console.log('Your public IP (must be allowed in Atlas → Network Access):', ip);
} catch { /* offline or blocked: ignore */ }
if (!/mongodb\.net\/[^/?]+/.test(uri) && /mongodb\.net/.test(uri)) {
  console.log('Note: no database name after ".mongodb.net/" — add /jaggery before the "?" so data goes into the "jaggery" database.');
}
try {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 15000 });
  const db = mongoose.connection.db;
  const slots = await db.collection('slots').countDocuments().catch(() => 0);
  console.log(`✔ Connected to database "${db.databaseName}". Media boxes in it: ${slots}`);
  await mongoose.disconnect();
  process.exit(0);
} catch (err) {
  console.error(explainDbError(err, uri));
  process.exit(1);
}
