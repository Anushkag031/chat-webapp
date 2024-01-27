import React from 'react'
import user from "../img/user.png"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
const NavBar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Whisp.in</span>
      <div className="user">
        <img src={user}alt="" />
        <span>Anushka</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar
