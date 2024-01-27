import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import {  createContext, useEffect, useState } from "react";

export const AuthContext= createContext();

export const AuthContextProvider=({children}) => {
   // const [currentUser, setCurrentUser] = useState({});

   const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

    //to check user
    useEffect(() => {
        //whether there is a current user
       const unsub=  onAuthStateChanged(auth,(user)=>{
            //if yes, set current user
            setCurrentUser(user);
            console.log(user);
            setLoading(false);
        });

        return () => {
            unsub();
        }
    },[]);

    if (loading) {
        return <div>Loading...</div>;
      }

   return (
        <AuthContext.Provider value={{currentUser}}>
        {children}
        </AuthContext.Provider>
   );
};