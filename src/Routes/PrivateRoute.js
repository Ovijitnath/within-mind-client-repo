import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h1 className='text-5xl'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto"></div></h1>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;