import React, { useContext, useEffect, useState } from 'react'
import Msg from './Msg'
import { ChatContext } from '../context/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase';
const Messages = () => {

  const [ messages, setMessages] = useState([])
  const { data } = useContext(ChatContext)


  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unsub()
    }
  }, [data.chatId])

  console.log(messages)
  return (
    <div className='messages'>
      
      { messages.map(m=>(
        <Msg message={m} key={m.id}/>
        
      )) }
      
      
    </div>
  )
}

export default Messages
