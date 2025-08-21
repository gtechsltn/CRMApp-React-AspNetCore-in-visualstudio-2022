import { useState } from 'react';
import API from '../services/api'; // your axios instance

export default function UserManagement() {
    const [form, setForm] = useState({
        username: '',
        password: '',
        role: 'Customer',
    });
    const [message, setMessage] = useState('');

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMessage('');
        try {
            await API.post('/api/users/register', form);
            setMessage('User successfully registered!');
            setForm({ username: '', password: '', role: 'Customer' }); // reset form
        } catch (err) {
            setMessage('Error registering user: ' + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div style={styles.container}>
            <h2>User Management</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                    style={styles.input}
                />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    style={styles.input}
                />
                <select name="role" value={form.role} onChange={handleChange} style={styles.select}>
                    <option value="Customer">Customer</option>
                    <option value="Super">Super</option>
                    <option value="Admin">Admin</option>
                </select>
                <button type="submit" style={styles.button}>Add User</button>
            </form>
            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: 400,
        margin: '40px auto',
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        border: '1px solid #ddd',
        borderRadius: 10,
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        borderRadius: 5,
        border: '1px solid #ccc',
    },
    select: {
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        borderRadius: 5,
        border: '1px solid #ccc',
    },
    button: {
        padding: 12,
        backgroundColor: '#2980b9',
        color: '#fff',
        border: 'none',
        borderRadius: 5,
        cursor: 'pointer',
        fontSize: 16,
    },
    message: {
        marginTop: 15,
        fontWeight: 'bold',
    },
};
