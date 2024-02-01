import React, { useContext, useEffect, useState } from 'react'
import user from "../img/user.png"
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase';
import { ChatContext } from '../context/ChatContext';




const Chats = () => {

  const [chats, setChats] = useState([])

  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)
 
  useEffect(() => {

    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
       // console.log("getchats"+doc.data())
    });
    
    return () => {
      unsub();
    }
    }

    currentUser.uid && getChats();


  },[currentUser.uid])

  
  const handleSelect  = (u) => {
    dispatch({
      type : "CHANGE_USER", 
      payload :u
    })
  }


  return (
    <div className='chats'>
      {chats && Object.entries(chats)?.map((chat) => (
        <div className="userchat" key={chat[0]} 
        onClick={ () => handleSelect(chat[1].userInfo)}>
        <img src={chat[1].userInfo.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].userInfo.lastMessage?.text}</p>
        </div>
      </div>
      ))}
      
    </div>
  )
}

export default Chats
