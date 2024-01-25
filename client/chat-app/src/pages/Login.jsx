import React from 'react'
import icon from "../img/icon2.jpeg"
const Login = () => {
  return (
    <div className='formcontainer'>
        <div className="formwrapper">
            <span className="logo">SOCIAL-SPHERE</span>
            <span className="title">Login </span>
            <form action="">
                
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="password" name="" id="" placeholder='Password'/>
                
                <button>Sign In</button>
            </form>
            <p>Dont have an account? Register </p>
        </div>      
    </div>
  )
}

export default Login
