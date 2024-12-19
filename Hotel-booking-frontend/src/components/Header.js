import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ token, setToken }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <a className="navbar-brand text-primary" href="/">Hotel Booking</a>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        {token ? (
                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <a className="btn btn-primary mx-2" href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-secondary" href="/signup">Sign Up</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
