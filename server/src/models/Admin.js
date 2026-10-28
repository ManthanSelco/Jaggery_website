import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  name: { type: String, default: 'Admin' },
}, { timestamps: true });

adminSchema.methods.checkPassword = function (pw) {
  return bcrypt.compare(pw, this.passwordHash);
};
adminSchema.statics.hash = pw => bcrypt.hash(pw, 12);

export const Admin = mongoose.model('Admin', adminSchema);
