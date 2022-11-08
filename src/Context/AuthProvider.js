import React, { createContext } from 'react';

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const authInfo = { user }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProvider;