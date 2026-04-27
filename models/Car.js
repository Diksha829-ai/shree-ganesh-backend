const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // e.g., Sedan, SUV
  capacity: { type: String, required: true },
  pricePerKm: { type: Number, required: true },
  image: { type: String, required: true }, // Cloudinary URL
  desc: { type: String }
});

module.exports = mongoose.model('Car', carSchema);