import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import LoderReact from '../components/loder/LoderReact';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <LoderReact></LoderReact>
    }

    if (user) {
        return children
    }

    return <Navigate to="/admin-login"></Navigate>
};

export default PrivateRoutes;