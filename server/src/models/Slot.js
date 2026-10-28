import mongoose from 'mongoose';

// One item shown in a media box: an uploaded image/video, an image URL, or a YouTube video.
const itemSchema = new mongoose.Schema({
  type: { type: String, enum: ['image', 'video', 'youtube'], required: true },
  src: { type: String, trim: true, maxlength: 1000 },          // image or video URL (/uploads/... or https://...)
  poster: { type: String, trim: true, maxlength: 1000 },       // video poster image
  youtubeId: { type: String, trim: true, match: /^[\w-]{6,20}$/ },
  title: { type: String, trim: true, maxlength: 200, default: '' },
  caption: { type: String, trim: true, maxlength: 400, default: '' },
  button: { type: String, trim: true, maxlength: 40 },         // custom label for the video button
  credit: {
    text: { type: String, trim: true, maxlength: 120 },
    url: { type: String, trim: true, maxlength: 1000 },
  },
}, { _id: false });

itemSchema.pre('validate', function () {
  if (this.type === 'youtube' && !this.youtubeId) throw new Error('YouTube item needs a video ID');
  if (this.type !== 'youtube' && !this.src) throw new Error(`${this.type} item needs a file or URL`);
});

// A media box on a page ("Insert photo" / "Insert video" in the original design).
const slotSchema = new mongoose.Schema({
  slotId: { type: String, required: true, unique: true, index: true },
  page: { type: String, required: true, index: true },
  pageRoute: { type: String, required: true },
  kind: { type: String, enum: ['photo', 'video'], required: true },
  label: { type: String, default: '' },                         // what the box is meant to show
  order: { type: Number, default: 0 },
  items: { type: [itemSchema], default: [] },
  seedKeys: { type: [String], default: [] },                    // seed items already offered (so `npm run seed` never adds them twice)
}, { timestamps: true });

export const Slot = mongoose.model('Slot', slotSchema);
