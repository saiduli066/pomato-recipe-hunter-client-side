import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
     };

     const signIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
     };

     const logOut = () => {
       return signOut(auth);
     };

    const authInfo = {
      user,
      createUser,
      signIn,
      logOut,
      loading,
      setLoading,
    };

  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
