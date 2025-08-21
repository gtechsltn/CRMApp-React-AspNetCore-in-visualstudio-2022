import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        return token ? { token, role } : null;
    });

    useEffect(() => {
        if (auth?.token) {
            localStorage.setItem('token', auth.token);
            localStorage.setItem('role', auth.role);
        } else {
            localStorage.clear();
        }
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
