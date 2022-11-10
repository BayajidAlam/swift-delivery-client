import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const Provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

  const [ user, setUser ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  
  // sign in user 
  const handleSignup = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // sign in existing user
  const SignInUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  // sign in with google 
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth,Provider)
  }
  
  // log out user 
  const logOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  // unmount 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
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
    logOutUser,
    loading,
    setLoading
  }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProvider;