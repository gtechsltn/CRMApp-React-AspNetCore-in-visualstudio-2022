import { useState } from 'react';
import API from '../services/api';
import '../pages/Register.css'; // ✅ Add CSS file

export default function Register() {
    const [form, setForm] = useState({
        username: '',
        password: '',
        role: 'Customer'
    });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await API.post('/api/users/register', {
                username: form.username,
                password: form.password,
                role: form.role
            });
            alert('✅ User registered! Now login.');
        } catch (err) {
            console.error("Registration failed:", err);
            alert("❌ Registration failed. Please try again.");
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Create Account</h2>
                <input
                    type="text"
                    value={form.username}
                    onChange={e => setForm({ ...form, username: e.target.value })}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="Password"
                    required
                />
                <select
                    value={form.role}
                    onChange={e => setForm({ ...form, role: e.target.value })}
                >
                    <option value="Customer">Customer</option>
                    <option value="Super">Super</option>
                    <option value="Admin">Admin</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
