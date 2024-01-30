import React, { useContext, useState } from 'react'
//import user from "../img/user.png"
import { collection, getDoc, query, serverTimestamp, where,doc,setDoc, getDocs } from "firebase/firestore";
import {db} from "../firebase"
import { AuthContext } from '../context/AuthContext';
import { updateDoc } from "firebase/firestore";


const Search = () => {

  const [username, setUsername]=useState("");
  const [user, setUser] = useState(null);
  const [err , setErr] = useState(false); 

  const {currentUser}=useContext(AuthContext);

  const handleSearch =async () => {
    setErr(false); 

    const q= query(
    collection(db, "users"), 
    where("displayName", "==", username)
    )

    try {
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 0) {
        setErr(true); // User not found
      } else {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      }
    } catch (error) {
      console.error('Error searching for user:', error);
      setErr(true);
    }
  };


  const handleKey=  ( e )=> {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async ( )=> {
    //check if group(chats) exists

    const combinedId = 
    currentUser.uid > user.uid 
    ? currentUser.uid + user.uid 
    : user.uid + currentUser.uid;

    try 
    {
      const res= await getDoc(doc(db, "chats", combinedId));

      if(!res.exists()){
        //create a new chat
        await setDoc(doc(db, "chats", combinedId),{messages : []});

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid,),{
          [combinedId + ".userInfo"] : {
            uid : user.uid,
            displayName : user.displayName,
            photoURL : user.photoURL,
          },
          [combinedId + ".date"] : serverTimestamp()
        })

        //create user chats
        await updateDoc(doc(db, "userChats", user.uid,),{
          [combinedId + ".userInfo"] : {
            uid : currentUser.uid,
            displayName : currentUser.displayName,
            photoURL : currentUser.photoURL,
          },
          [combinedId + ".date"] : serverTimestamp()
        })
      }
    }
    catch( err)
    {
      console.error('Error creating/updating chat and userChats:', err);
    }
    setUser(null);
    setUsername("")

    //create user chats

  }




  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find an user' 
        //listens for input
        onKeyDown={handleKey}
        onChange={(e)=>setUsername(e.target.value)}
        value={username}
        />
      </div>
      {err && <span>User not found</span>}
      {user && (<div className="userchat"
      onClick={handleSelect}
      
      >
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>)}
    </div>
  )
}

export default Search
