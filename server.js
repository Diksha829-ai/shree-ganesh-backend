const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. IMPROVED CORS: Allow both local development and your future live site
const allowedOrigins = [
  'http://localhost:3000', // Local React Dev
  'https://your-frontend-name.vercel.app' // 🟢 Replace with your actual Vercel/Live URL later
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());

// 2. DATABASE CONNECTION: (Ensure MONGO_URI is set in your hosting dashboard)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ DB Connection Error:', err));

// Link Routes
app.use('/api/fleet', require('./routes/fleetRoutes'));
app.use('/api/tours', require('./routes/tourRoutes'));

// 3. DYNAMIC PORT: Essential for platforms like Render or Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));