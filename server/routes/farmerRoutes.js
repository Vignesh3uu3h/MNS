import express from 'express';
import {
  createFarmerInquiry,
  getFarmerInquiries
} from '../controllers/farmerController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', createFarmerInquiry);
router.get('/', protect, getFarmerInquiries);
export default router;
