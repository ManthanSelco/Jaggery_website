import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(here, '..');

function required(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing ${name} in server/.env (see server/.env.example)`);
    process.exit(1);
  }
  return v;
}

export const config = {
  port: Number(process.env.PORT || 5000),
  mongoUri: required('MONGODB_URI'),
  jwtSecret: required('JWT_SECRET'),
  // On Vercel the disk is read-only (except /tmp), so uploads are switched off there.
  uploadDir: process.env.VERCEL ? '/tmp/uploads' : path.resolve(ROOT, process.env.UPLOAD_DIR || 'uploads'),
  // Photos/videos that ship with the website (served as static files, also on Vercel)
  publicUploadDir: path.resolve(ROOT, '../client/public/uploads'),
  isVercel: !!process.env.VERCEL,
  clientDist: path.resolve(ROOT, process.env.CLIENT_DIST || '../client/dist'),
  maxUploadMb: Number(process.env.MAX_UPLOAD_MB || 500),
  isProd: process.env.NODE_ENV === 'production',
};
