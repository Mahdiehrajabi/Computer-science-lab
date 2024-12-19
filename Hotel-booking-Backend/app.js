const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const hotelRoutes = require('./routes/hotel');
const roomRoutes = require('./routes/room');
const bookingRoutes = require('./routes/booking');

dotenv.config();

const app = express();

// تنظیمات CORS
app.use(cors({
    origin: 'http://localhost:3000', // آدرس فرانت‌اند (بدون `/` در انتها)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // متدهای مجاز
    allowedHeaders: ['Content-Type', 'Authorization'], // هدرهای مجاز
}));

app.options('*', cors()); // مدیریت preflight requests

// پردازش JSON
app.use(express.json());

// مسیرهای API
app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);
app.use('/rooms', roomRoutes);
app.use('/bookings', bookingRoutes);

// اتصال به پایگاه داده
sequelize.authenticate()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Unable to connect to the database:', err));

sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch((err) => console.error('Error syncing database:', err));

// راه‌اندازی سرور
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});