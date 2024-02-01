import React, { useContext } from 'react'
import user from "../img/user.png"
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
const Msg = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  //console.log(message)
  return (
    <div className="msg owner">
      <div className="msginfo">
        <img src={user} alt="" />
        <span>Just now</span>
      </div>
      <div className="msgcontent">
        <p>hello</p>
      </div>
    </div>
  )
}

export default Msg
