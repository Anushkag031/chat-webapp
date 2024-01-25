import React from 'react'
import user from "../img/user.png"
const Msg = () => {
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
