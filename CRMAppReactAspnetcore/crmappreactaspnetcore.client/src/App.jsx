import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import UserManagement from './components/UserManagement.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './dashboards/AdminDashboard';
import SuperDashboard from './dashboards/SuperDashboard';
import CustomerDashboard from './dashboards/CustomerDashboard';
import ProtectedRoute from './routes/ProtectedRoute.jsx';

function App() {
    return (
        <AuthProvider>
            <Router>
                {/* Show Navbar on all pages except maybe login/register */}
                <Navbar />

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute roles={['Admin']}>
                                <AdminDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/super"
                        element={
                            <ProtectedRoute roles={['Super']}>
                                <SuperDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/customer"
                        element={
                            <ProtectedRoute roles={['Customer']}>
                                <CustomerDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <ProtectedRoute roles={['Super','Admin']}>
                                <UserManagement />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="/unauthorized" element={<h2>Unauthorized</h2>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
