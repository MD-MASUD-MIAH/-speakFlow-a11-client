import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true) 
  const provider = new GoogleAuthProvider()
 
  
 const registerUser = (email,passward)=>{

    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,passward)
 }

const upDateUser = (updateData)=>{
  setLoading(true)
    return updateProfile(auth.currentUser,updateData)
}
 const logInUser = (email,passward)=>{

    setLoading(true)
    return signInWithEmailAndPassword(auth,email,passward)
 }


 const googleLogin = ()=>{

    return signInWithPopup(auth,provider)
 }
 const logout = ()=>{

    return signOut(auth)
 }

    const userInfo = {

       user,
       setUser,
       loading, 
       registerUser,
       logInUser,
       upDateUser,
       logout,
       googleLogin
    }


    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,currentUser=>{


            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{

            unsubscribe()
        }

    },[])
    return <AuthContext value={userInfo}>

 {children}

    </AuthContext>
};

export default AuthProvider;