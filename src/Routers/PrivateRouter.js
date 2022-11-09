import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRouter = ({children}) => {

  const { user,loading } = useContext(AuthContext)
  const location = useLocation()
    if(loading){
       return <p className='text-5xl'>Loading</p>
    }
    if(user){
      return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
 
};

export default PrivateRouter;