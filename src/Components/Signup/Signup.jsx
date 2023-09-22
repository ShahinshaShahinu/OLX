import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Signup.css';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');

  const {db,auth}=useContext(FirebaseContext)

  const navigate=useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    // create a account 
   createUserWithEmailAndPassword(auth,email,password).then((result)=>{
     updateProfile( result.user,{displayName:username}).then(()=>{
      const  obj={
        id:result.user.uid,
        profileName:username,
        number:phone
      }
      // the datas store in fireStore
      addDoc(collection(db,'Users'),obj).then(()=>{navigate('/login')})
     })
    }).catch(error=>{
      console.log(error);
      
      if(error.code==='auth/email-already-in-use'){
        console.log('email Already');
      }
    })
    console.log(auth);
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <p onClick={()=>{navigate('/login')}} style={{ cursor: 'pointer' }}>Login</p>
      </div>
    </div>
  );
}