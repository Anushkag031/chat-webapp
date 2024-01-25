import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase";
import {  createContext, useEffect, useState } from "react";

export const AuthContext= createContext;

export const AuthContextProvider=({children}) => {
    const [currentUser, setCurrentUser] = useState({})

    //to check user
    useEffect(() => {
        //whether there is a current user
        onAuthStateChanged(auth,(user)=>{
            //if yes, set current user
            setCurrentUser(user);
            console.log(user);
        });
    },[]);

    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
}