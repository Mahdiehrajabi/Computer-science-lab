import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bookings = ({ token }) => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (token) {
            axios
                .get('http://localhost:3001/bookings', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    setBookings(response.data);
                })
                .catch((error) => {
                    setError('Failed to fetch bookings.');
                });
        } else {
            setError('You must be logged in to view bookings.');
        }
    }, [token]);

    if (error) {
        return <p className="text-danger text-center mt-5">{error}</p>;
    }

    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">Your Bookings</h3>
            {bookings.length > 0 ? (
                <div className="row">
                    {bookings.map((booking) => (
                        <div className="col-md-4 mb-4" key={booking.id}>
                            <div className="card shadow">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{booking.hotelName}</h5>
                                    <p><strong>Room:</strong> {booking.roomName}</p>
                                    <p><strong>Check-in:</strong> {booking.checkInDate}</p>
                                    <p><strong>Check-out:</strong> {booking.checkOutDate}</p>
                                    <p><strong>Status:</strong> <span className={`badge ${booking.status === 'Confirmed' ? 'bg-success' : 'bg-warning'}`}>{booking.status}</span></p>
                                    <button className="btn btn-info btn-block mt-3">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">You have no bookings yet.</p>
            )}
        </div>
    );
};

export default Bookings;
