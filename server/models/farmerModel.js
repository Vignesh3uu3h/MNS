import mongoose from 'mongoose';

const farmerSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  quantity: { type: String, required: true },
  message: { type: String }
}, { timestamps: true });

const Farmer = mongoose.model('Farmer', farmerSchema);
export default Farmer;
