const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Hotel = require('./Hotel'); // مدل هتل
const Room = require('./Room');   // مدل اتاق
const User = require('./User');   // مدل کاربر

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    hotelId: {
        type: DataTypes.INTEGER,
        references: {
            model: Hotel,
            key: 'id',
        },
        allowNull: false,
    },
    roomId: {
        type: DataTypes.INTEGER,
        references: {
            model: Room,
            key: 'id',
        },
        allowNull: false,
    },
    checkInDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    checkOutDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
        defaultValue: 'pending',
    },
});

module.exports = Booking;
