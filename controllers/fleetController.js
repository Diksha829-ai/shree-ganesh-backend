const Car = require('../models/Car');

// Make sure you are using "exports.getAllCars" 
// so it can be imported as an object later
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addCar = async (req, res) => {
  try {
    const newCar = new Car({
      ...req.body,
      image: req.file.path 
    });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};