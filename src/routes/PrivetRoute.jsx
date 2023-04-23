import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const location = useLocation()
    console.log(location)
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div><p>Loading...</p></div>
    }


    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;