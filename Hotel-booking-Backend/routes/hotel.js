const express = require('express');
const Hotel = require('../models/Hotel'); 
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const hotel = await Hotel.create(req.body);
        res.status(201).json(hotel);
    } catch (err) {
        res.status(500).json({ error: 'Error creating hotel' });
    }
});


router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.findAll();
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching hotels' });
    }
});

module.exports = router;
