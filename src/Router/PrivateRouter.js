import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/UserContext';

const PrivateRouter = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation()

  if(loading){
    return <h2>Loading...</h2>;
  }

  // console.log(user);
  if(user && user?.uid){
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;