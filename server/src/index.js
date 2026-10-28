// Normal Node server (local development, VPS, Render, Railway…).
import { config } from './config.js';
import { connectDb } from './db.js';
import { explainDbError } from './utils/dbHelp.js';
import app from './app.js';

connectDb()
  .then(() => {
    console.log('MongoDB connected');
    app.listen(config.port, () => console.log(`Server running on http://localhost:${config.port}`));
  })
  .catch(err => {
    console.error(explainDbError(err, config.mongoUri));
    process.exit(1);
  });
