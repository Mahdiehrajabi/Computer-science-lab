const express = require('express');
const Room = require('../models/Room'); 
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json(room);
    } catch (err) {
        res.status(500).json({ error: 'Error creating room' });
    }
});


router.get('/', async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching rooms' });
    }
});

module.exports = router;
