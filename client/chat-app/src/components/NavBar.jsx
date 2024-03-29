import React, { useContext } from 'react'
import user from "../img/user.png"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
const NavBar = () => {

  const {currentUser} = useContext(AuthContext);
  console.log(currentUser.displayName);

  return (
    <div className='navbar'>
      <span className="logo">Whisp.in</span>
      <div className="user">
        <img src={currentUser.photoURL}alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}


export default NavBar
