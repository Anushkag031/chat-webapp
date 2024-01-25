import React from 'react'
import video from "../img/video.jpeg"
import add from "../img/add.png"
import more from "../img/more.png"
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
   <div className="chat">
    <div className="chatinfo">
      <span>Anushka</span>
      <div className="chaticons">
        <img src={video} alt="" />
        <img src={add} alt="" />
        <img src={more} alt="" />
      </div>
    </div>
    <Messages/>
    <Input/>
   </div>
  )
}

export default Chat
