import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const Provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState(null)
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

  const logOutUser = () => {
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      console.log('user inside state change',currentUser)
    })
      
    return()=>{
      unsubscribe()
    }
  },[])

  const authInfo = 
  { 
    user,
    handleSignup,
    SignInUser,
    signInWithGoogle,
    logOutUser
  }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProvider;