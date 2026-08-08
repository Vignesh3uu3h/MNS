import mongoose from 'mongoose';

const gallerySchema = mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true }
}, { timestamps: true });

const GalleryItem = mongoose.model('GalleryItem', gallerySchema);
export default GalleryItem;
