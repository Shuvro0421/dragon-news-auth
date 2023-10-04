import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword , onAuthStateChanged , signOut , signInWithEmailAndPassword    } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useEffect } from "react";



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const  [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    useEffect(() =>{
        const unSubscribe =  onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    } , [])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const signIn = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;