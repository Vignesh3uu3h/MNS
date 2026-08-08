import asyncHandler from 'express-async-handler';
import GalleryItem from '../models/galleryModel.js';

export const getGallery = asyncHandler(async (req, res) => {
  const items = await GalleryItem.find({});
  res.json(items);
});

export const createGalleryItem = asyncHandler(async (req, res) => {
  const { title, imageUrl } = req.body;
  const item = await GalleryItem.create({ title, imageUrl });
  res.status(201).json(item);
});

export const deleteGalleryItem = asyncHandler(async (req, res) => {
  const item = await GalleryItem.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error('Gallery item not found');
  }
  await item.remove();
  res.json({ message: 'Gallery item removed' });
});
