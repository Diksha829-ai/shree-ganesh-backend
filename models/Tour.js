const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  locations: { type: String },
  duration: { type: String },
  image: { type: String } // Cloudinary URL
});

module.exports = mongoose.model('Tour', tourSchema);