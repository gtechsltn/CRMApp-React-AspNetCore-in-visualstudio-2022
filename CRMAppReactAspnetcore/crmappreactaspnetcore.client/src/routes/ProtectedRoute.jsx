import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children, roles }) {
    const { auth } = useContext(AuthContext);

    if (!auth) return <Navigate to="/login" />;
    if (!roles.includes(auth.role)) return <Navigate to="/unauthorized" />;
    return children;
}
