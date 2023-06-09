import React, { useContext } from 'react';

import { Navigate, useLocation, useNavigation } from 'react-router-dom';

import { AuthContext } from '../Provider/AuthProviders';
import Spinner from '../Spinner/Spinner';


// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    // Spinner
    const navigate = useNavigation();
	if (navigate.state === "loading" || loading) {
		return <Spinner></Spinner>;
	}
    else if(user){
        return children;
    }
    return (
       <Navigate to='/login' 
       state={{from: location}} 
       replace={true}>

       </Navigate>
    );
};

export default PrivateRoutes;