const { Sequelize } = require('sequelize');

// تنظیمات اتصال به پایگاه داده
const sequelize = new Sequelize('hotel', 'sa', 'admin@123', {
    host: 'localhost',
    dialect: 'postgres', // نوع پایگاه داده
});

// بررسی اتصال به پایگاه داده
sequelize.authenticate()
    .then(() => {
        console.log('Connected to PostgreSQL database!');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
