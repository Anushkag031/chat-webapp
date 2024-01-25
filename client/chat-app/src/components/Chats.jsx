import React from 'react'
import user from "../img/user.png"
const Chats = () => {
  return (
    <div className='chats'>
      <div className="userchat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>ABC</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userchat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>ABC</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userchat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>ABC</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userchat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>ABC</span>
          <p>Hello</p>
        </div>
      </div>
      
    </div>
  )
}

export default Chats
