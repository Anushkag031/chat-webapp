import React, { useState } from 'react'
import icon from "../img/icon2.jpeg"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth , db,  storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import {useNavigate , Link} from "react-router-dom";

const Register = () => {

  //to handle error during login
  const [err, setErr] = useState(false);

  //for navigation
  const navigate= useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    //console.log(e.target[0].value);

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      
      uploadTask.on(
        (error) => {
         setErr(true);
        },
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
        
          });
          //if registration is successful then navigate to home page
          await setDoc(doc(db, "userChats", res.user.uid),{});
          navigate("/");
        }
      );
    })
  }
  catch (err) {
      setErr(true);

    }
  }


  return (

    <div className='formcontainer'>
      <div className="formwrapper">
        <span className="logo">Whisp.in</span>
        <span className="title">Register your details</span>
        <form onSubmit={handleSubmit}>
          <input type="text"  placeholder='Enter your Name' />
          <input type="email"  placeholder='Email' />
          <input type="password"  placeholder='Password' />
          <input type="file" name="" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={icon} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong....</span>}
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Register
