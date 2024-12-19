import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Bookings from './pages/Bookings';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token')); // خواندن توکن از localStorage

    useEffect(() => {
        console.log('Token in App.js:', token); // بررسی مقدار توکن
    }, [token]);
	


    return (
        <>
            <Header token={token} setToken={setToken} />
            <div className="container mt-5">
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/bookings" element={<Bookings token={token} />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
