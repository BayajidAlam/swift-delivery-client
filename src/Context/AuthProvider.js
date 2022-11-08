import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {

  // sign in user 
  const handleSignup = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // sign in existing user
  const SignInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const authInfo = 
  { 
   
    handleSignup,
    SignInUser
  }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProvider;