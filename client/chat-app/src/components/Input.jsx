import React, { useContext, useState } from 'react'
import attach from "../img/attach.png"
import image from "../img/image.jpeg"
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'



const Input = () => {

  const [text,setText]=useState("")
  const [img, setImg] = useState(null)

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  
  //const uniqueId = uuid();
  //console.log(uniqueId);


  const handleSend = async() => {

   // console.log('Data:', data);
   // console.log('CurrentUser:', currentUser);
    

    if (!data.chatId) {
      console.error('Error: Chat ID is null or undefined.');
      return;
    }

   // if (data.chatId !== 'null') {
    if(img){

      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          console.error('Error uploading image:', error);
        },
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId),{
              messages : arrayUnion({
                id: uuid(),
                text,
                senderId : currentUser.uid,
                date:Timestamp.now(),
                img: downloadURL
              }),
             });
        }
      );
    })

    }
    else
    {
      await updateDoc(doc(db, "chats", data.chatId),{
        messages : arrayUnion({
          id: uuid(),
          text,
          senderId : currentUser.uid,
          date:Timestamp.now(),
        }),
       });
    }
 
 setText("")
 setImg(null)

  }


  return (
    <div className='input'>
      <input type="text" placeholder='Type Something........' onChange={e=>setText(e.target.value)}/>
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display:"none"}}name="" id="file" onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img src={image} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
