import mongoose from 'mongoose';

// A file in the media library (uploaded through the admin panel, already compressed).
const mediaSchema = new mongoose.Schema({
  type: { type: String, enum: ['image', 'video'], required: true },
  src: { type: String, required: true },          // public URL, e.g. /uploads/videos/abc.mp4
  poster: { type: String },                       // videos only
  originalName: { type: String, default: '' },
  sizeBefore: { type: Number, default: 0 },       // bytes as uploaded
  sizeAfter: { type: Number, default: 0 },        // bytes after compression
  width: Number,
  height: Number,
}, { timestamps: true });

export const Media = mongoose.model('Media', mediaSchema);
