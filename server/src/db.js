import mongoose from 'mongoose';
import { config } from './config.js';

// One shared connection, reused between requests (needed for serverless hosts like Vercel).
let pending = null;
export function connectDb() {
  if (mongoose.connection.readyState === 1) return Promise.resolve(mongoose.connection);
  if (!pending) {
    pending = mongoose.connect(config.mongoUri, { serverSelectionTimeoutMS: 15000 })
      .then(() => mongoose.connection)
      .catch(err => { pending = null; throw err; });
  }
  return pending;
}
