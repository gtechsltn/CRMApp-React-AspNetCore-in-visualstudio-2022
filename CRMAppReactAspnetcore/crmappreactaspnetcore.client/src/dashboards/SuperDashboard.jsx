import { useNavigate } from 'react-router-dom';

export default function SuperDashboard() {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome, Super User!</h1>
            <p style={styles.subheading}>Manage tasks, leads, and users from here.</p>

            <div style={styles.cardContainer}>
                <div style={styles.card} onClick={() => navigate('/admin')}>
                    <h2>Admin Panel</h2>
                    <p>Manage admin users and permissions</p>
                    <button style={styles.button}>Go to Admin</button>
                </div>

                <div style={styles.card} onClick={() => navigate('/customer')}>
                    <h2>Customer Panel</h2>
                    <p>Manage customers and their data</p>
                    <button style={styles.button}>Go to Customers</button>
                </div>

                <div style={styles.card} onClick={() => navigate('/users')}>
                    <h2>User Management</h2>
                    <p>Add new users or assign roles</p>
                    <button style={styles.button}>Manage Users</button>
                </div>
            </div>
        </div>
    );
}

// reuse same styles as before
const styles = {
    container: {
        maxWidth: 900,
        margin: '40px auto',
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.8rem',
        marginBottom: 10,
        color: '#2c3e50',
    },
    subheading: {
        fontSize: '1.2rem',
        marginBottom: 30,
        color: '#34495e',
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
    },
    card: {
        flex: '1 1 280px',
        border: '1px solid #ddd',
        borderRadius: 10,
        padding: 30,
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
    },
    button: {
        marginTop: 15,
        padding: '10px 25px',
        border: 'none',
        borderRadius: 5,
        backgroundColor: '#2980b9',
        color: '#fff',
        fontSize: 16,
        cursor: 'pointer',
    },
};
