import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import fs from 'node:fs';
import path from 'node:path';
import { config } from './config.js';
import { connectDb } from './db.js';
import { explainDbError } from './utils/dbHelp.js';
import authRoutes from './routes/auth.js';
import { publicSlots, adminSlots } from './routes/slots.js';
import mediaRoutes from './routes/media.js';

// The Express app. Used by src/index.js (normal server) and by api/index.js (Vercel).
const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1);

app.use(helmet({
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'blob:', 'https:'],
      mediaSrc: ["'self'", 'blob:', 'https:'],
      frameSrc: ['https://www.youtube-nocookie.com', 'https://www.youtube.com'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
    },
  },
}));
app.use(compression());
app.use(morgan(config.isProd ? 'combined' : 'dev'));
app.use(express.json({ limit: '1mb' }));

// Make sure MongoDB is connected before any API call.
app.use('/api', async (req, res, next) => {
  try { await connectDb(); next(); }
  catch (err) {
    console.error(explainDbError(err, config.mongoUri));
    res.status(503).json({ error: 'Database not reachable. Check MONGODB_URI and Atlas Network Access.' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true, db: mongoose.connection.readyState === 1, uploads: !config.isVercel }));
app.use('/api/auth', authRoutes);
app.use('/api/slots', publicSlots);
app.use('/api/admin/slots', adminSlots);
app.use('/api/admin/media', mediaRoutes);
app.use('/api', (req, res) => res.status(404).json({ error: 'Not found' }));

// Uploaded and seeded media (videos support seeking via range requests)
app.use('/uploads', express.static(config.uploadDir, { maxAge: '30d', index: false }));
app.use('/uploads', express.static(config.publicUploadDir, { maxAge: '30d', index: false, fallthrough: false }));

// React build (production)
if (fs.existsSync(path.join(config.clientDist, 'index.html'))) {
  app.use(express.static(config.clientDist, { maxAge: '1h', index: false }));
  app.get(/^\/(?!api|uploads).*/, (req, res) => res.sendFile(path.join(config.clientDist, 'index.html')));
}

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: config.isProd ? 'Something went wrong' : err.message });
});

export default app;
