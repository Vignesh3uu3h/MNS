import asyncHandler from 'express-async-handler';
import Farmer from '../models/farmerModel.js';

export const createFarmerInquiry = asyncHandler(async (req, res) => {
  const { name, phone, location, quantity, message } = req.body;
  const farmer = await Farmer.create({ name, phone, location, quantity, message });
  res.status(201).json(farmer);
});

export const getFarmerInquiries = asyncHandler(async (req, res) => {
  const inquiries = await Farmer.find({});
  res.json(inquiries);
});
