const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Hotel = sequelize.define('Hotel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imageURL: {
        type: DataTypes.STRING,
    },
});

module.exports = Hotel;
