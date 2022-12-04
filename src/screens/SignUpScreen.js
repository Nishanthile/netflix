import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import "./SignUpScreen.css"

const SignUpScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");



  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((authUser) => {
      console.log(authUser);
    }).catch((err) => {
      alert(err.message)
    })



  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((authUser) => {
      console.log(authUser);
    }).catch((err) => {
      alert(err.message)
    })
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input value={email} type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
        <input value={password} type="password" placeholder='Password' onChange={e => setPasssword(e.target.value)} />
        <button type='sybmit' onClick={signIn}>Sign In</button>
        <h4><span className='signupScreen_gray'>New to Netflix? </span>
          <span className='signupScreen_link' onClick={register}> Sign Up now.</span></h4>
      </form>
    </div>
  )
}

export default SignUpScreen
