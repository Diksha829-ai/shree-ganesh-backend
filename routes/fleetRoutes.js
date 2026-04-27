const express = require('express');
const router = express.Router();
// Import the controller
const fleetController = require('../controllers/fleetController');
const upload = require('../middleware/upload');

// LINE 6: Ensure fleetController.getAllCars is actually a function
router.get('/', fleetController.getAllCars);

// Route for adding a car
router.post('/add', upload.single('image'), fleetController.addCar);

module.exports = router;