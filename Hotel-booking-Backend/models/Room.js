const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Hotel = require('./Hotel'); 

const Room = sequelize.define('Room', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hotelId: {
        type: DataTypes.INTEGER,
        references: {
            model: Hotel,
            key: 'id',
        },
        allowNull: false,
    },
    roomType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pricePerNight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

module.exports = Room;
