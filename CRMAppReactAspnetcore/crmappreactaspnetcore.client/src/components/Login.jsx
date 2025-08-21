import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import API from '../services/api';
import '../pages/Login.css'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await API.post('/api/users/login', { username, password });
            const token = res.data.token;
            const payload = JSON.parse(atob(token.split('.')[1]));

            setAuth({ token, role: payload.role });
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            if (payload.role === 'Admin') navigate('/admin');
            else if (payload.role === 'Super') navigate('/super');
            else if (payload.role === 'Customer') navigate('/customer');
            else console.log("Unknown role:", payload.role);
        } catch (err) {
            console.error("Login failed:", err);
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
