import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';

const PiriveateRoute = ({children}) => {

    const {user,loading} = use(AuthContext)

    const location = useLocation()


    if(loading){

        return <Loader></Loader>
    }

    if(user && user.email){

        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
   
};

export default PiriveateRoute;