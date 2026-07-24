import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['text', 'heading', 'image', 'divider'],
    required: true
  },
  content: {
    type: mongoose.Schema.Types.Mixed, // Can be string or object
  },
  icon: {
    type: String,
    default: ""
  },
  src: String,
  alt: String,
}, { _id: false });

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  image: {
    type: String, // Featured image URL
    default: ""
  },
  date: {
    type: String,
    required: true
  },
  metaTitle: String,
  metaDescription: String,
  metaKeywords: [String],

  sections: [sectionSchema],

}, {
  timestamps: true
});

export default mongoose.model("Blog", blogSchema);