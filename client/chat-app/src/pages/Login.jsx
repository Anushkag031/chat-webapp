import React, { useState } from 'react'
import { useNavigate, Link} from "react-router-dom"


import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {

  const [err, setErr] = useState(false);

  //for navigation
  const navigate= useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    //console.log(e.target[0].value);

    
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
  }
  catch (err) {
      setErr(true);
    console.log("login error: " + err.message);
    }
  }


  return (
    <div className='formcontainer'>
        <div className="formwrapper">
            <span className="logo">SOCIAL-SPHERE</span>
            <span className="title">Login </span>
            <form onSubmit={handleSubmit}>
                
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="password" name="" id="" placeholder='Password'/>
                
                <button>Sign In</button>
                {err && <span>Something went wrong....</span>}
            </form>
            <p>Dont have an account? <Link to="/register">Register</Link></p>
        </div>      
    </div>
  )
}

export default Login
