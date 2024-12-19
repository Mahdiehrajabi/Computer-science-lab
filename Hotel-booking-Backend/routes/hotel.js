const express = require('express');
const Hotel = require('../models/Hotel'); // مدل هتل را وارد کنید
const router = express.Router();

// مسیر POST برای ایجاد هتل جدید
router.post('/', async (req, res) => {
    try {
        const hotel = await Hotel.create(req.body);
        res.status(201).json(hotel);
    } catch (err) {
        res.status(500).json({ error: 'Error creating hotel' });
    }
});

// اضافه کردن مسیرهای دیگر به دلخواه (مثلاً برای دریافت هتل‌ها)
router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.findAll();
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching hotels' });
    }
});

module.exports = router;
