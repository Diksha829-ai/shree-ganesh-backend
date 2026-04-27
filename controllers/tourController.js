const Tour = require('../models/Tour');

exports.getTours = async (req, res) => {
    try {
        const tours = await Tour.find({});
        res.json(tours);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tours" });
    }
};

exports.getTourById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (tour) res.json(tour);
        else res.status(404).json({ message: "Tour not found" });
    } catch (error) {
        res.status(500).json({ message: "Error fetching tour details" });
    }
};