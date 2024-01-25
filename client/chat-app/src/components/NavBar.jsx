import React from 'react'
import user from "../img/user.png"
const NavBar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Whisp.in</span>
      <div className="user">
        <img src={user}alt="" />
        <span>Anushka</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavBar
