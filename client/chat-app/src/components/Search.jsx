import React, { useState } from 'react'
//import user from "../img/user.png"
import { collection,  getDocs, query, where } from "firebase/firestore";
import {db} from "../firebase"

const Search = () => {

  const [username, setUsername]=useState("");
  const [user, setUser] = useState(null);
  const [err , setErr] = useState(false); 

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


  const handleKey= async ( )=> {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = ( e )=> {
    //check if group(chats) exists



    //create user chats

  }




  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find an user' 
        //listens for input
        onKeyDown={handleKey}
        onChange={(e)=>setUsername(e.target.value)}
        
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
