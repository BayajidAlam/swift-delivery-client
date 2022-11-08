import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const Provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

  // sign in user 
  const handleSignup = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // sign in existing user
  const SignInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  // sign in with google 
  const signInWithGoogle = () => {
    return signInWithPopup(auth,Provider)
  }

  const authInfo = 
  { 
   
    handleSignup,
    SignInUser,
    signInWithGoogle
  }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProvider;