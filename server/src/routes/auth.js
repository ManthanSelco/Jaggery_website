import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { Admin } from '../models/Admin.js';
import { requireAdmin, signToken } from '../middleware/auth.js';

const r = Router();

const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: true, legacyHeaders: false, message: { error: 'Too many login attempts. Try again in 15 minutes.' } });

r.post('/login', loginLimiter, async (req, res) => {
  const { email = '', password = '' } = req.body || {};
  const admin = await Admin.findOne({ email: String(email).toLowerCase().trim() });
  if (!admin || !(await admin.checkPassword(String(password)))) {
    return res.status(401).json({ error: 'Wrong email or password' });
  }
  res.json({ token: signToken(admin), admin: { email: admin.email, name: admin.name } });
});

r.get('/me', requireAdmin, async (req, res) => {
  const admin = await Admin.findById(req.admin.sub).select('email name');
  if (!admin) return res.status(401).json({ error: 'Please log in' });
  res.json({ admin });
});

export default r;
