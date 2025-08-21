import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import '../pages/Navbar.css';

export default function Navbar() {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(null);
        localStorage.removeItem('token'); // or wherever you store token
        delete axios.defaults.headers.common['Authorization'];
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">CRM Demo</div>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                </li>
                {auth?.role === 'Admin' && (
                    <li>
                        <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Admin
                        </NavLink>
                    </li>
                )}
                {auth?.role === 'Super' && (
                    <li>
                        <NavLink to="/super" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Super
                        </NavLink>
                    </li>
                )}
                {auth?.role === 'Customer' && (
                    <li>
                        <NavLink to="/customer" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Customer
                        </NavLink>
                    </li>
                )}
            </ul>
            {auth ? (
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            ) : (
                <NavLink to="/login" className="login-link">
                    Login
                </NavLink>
            )}
        </nav>
    );
}
