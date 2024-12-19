const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hotel', 'sa', 'admin@123', {
    host: 'localhost',
    dialect: 'postgres',
});


sequelize.authenticate()
    .then(() => {
        console.log('Connected to PostgreSQL database!');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
