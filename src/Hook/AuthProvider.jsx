/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./Firebase.config";




export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleAuthProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }


  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth);

  }


  const googleSignIn = () => {
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("user on state change",currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe()
    }
  }, [])


  const AuthInfo = {
    user,
    createUser,
    logOut,
    signIn,
    googleSignIn,

  }


  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;