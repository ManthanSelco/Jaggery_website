import jwt from 'jsonwebtoken';
import { config } from '../config.js';

export function signToken(admin) {
  return jwt.sign({ sub: String(admin._id), email: admin.email }, config.jwtSecret, { expiresIn: '7d' });
}

export function requireAdmin(req, res, next) {
  const h = req.headers.authorization || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Please log in' });
  try {
    req.admin = jwt.verify(token, config.jwtSecret);
    next();
  } catch {
    res.status(401).json({ error: 'Session expired, please log in again' });
  }
}
