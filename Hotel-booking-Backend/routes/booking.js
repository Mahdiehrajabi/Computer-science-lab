const express = require('express');
const Booking = require('../models/Booking'); // مدل رزرو را وارد کنید
const router = express.Router();
const authenticateToken = require('../middleware/auth');  // وارد کردن middleware

// مسیر POST برای ایجاد رزرو جدید
router.post('/', async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ error: 'Error creating booking' });
    }
});


router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.findAll();  // تمام رزروها را دریافت کنید
        res.status(200).json(bookings); // بازگشت رزروها به عنوان پاسخ
    } catch (err) {
        res.status(500).json({ error: 'Error fetching bookings' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const booking = await Booking.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({ error: 'Error updating booking' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Booking.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting booking' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findOne({
            where: { id: req.params.id }
        });
        if (booking) {
            res.status(200).json(booking);
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error fetching booking' });
    }
});


router.get('/', authenticateToken, async (req, res) => {
    try {
        // فقط رزروهای مربوط به کاربر جاری را نمایش دهید
        const bookings = await Booking.findAll({
            where: { userId: req.user.id }  // فیلتر کردن بر اساس userId
        });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching bookings' });
    }
});


module.exports = router;
