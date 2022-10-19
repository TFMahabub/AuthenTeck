import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from './Firebase.config';

export const AuthContext = createContext()
const Auth = getAuth(app)

const UserContext = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)



  //Register-
  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(Auth, email, password);
  }

  //login-
  const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(Auth, email, password)
  }

  //logout-
  const logOut = () =>{
    
    return signOut(Auth)
  }



  useEffect(() =>{
    const unSubscrib = onAuthStateChanged(Auth, (currentUser) =>{
      setUser(currentUser)
      setLoading(false)
    })
    return () => unSubscrib();
  },[])

  const AuthInfo = {user, createUser, loginUser, logOut, loading}
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContext;