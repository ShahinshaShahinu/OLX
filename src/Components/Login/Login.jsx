import React, { useContext, useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Login.css';

import { useNavigate } from 'react-router-dom';


function Login() {
 const Navigate=useNavigate()
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
const {db,auth}=useContext(FirebaseContext);


 const handleLogin=(e)=>{
   e.preventDefault()
   
   signInWithEmailAndPassword(auth,email,password).then(()=>{
    Navigate('/')
   }).catch((error)=>{
    alert(error.message)
   })
 }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
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
          <button type='submit'>Login</button>
        </form>
        <p onClick={()=>{Navigate('/Signup')}} style={{ cursor: 'pointer' }}>Signup</p>

      </div>
    </div>
  );
}

export default Login;