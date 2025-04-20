import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState] = useState("Login")


  return (
    <div className='login-popup'>
        <form action="" className="login-container">
          <div className="login-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
          </div>
          <div className="login-input">
            {currState==="Login"?<></>:<input type="text" placeholder='Name' required/>}
            <input type="email" placeholder='Email' required/>
            <input type="password" placeholder='Password' required />
          </div>
          <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
          <div className='login-condition'>
            <input type="checkbox" required />
            <p>By Continuing, I agree to the Terms and Conditions</p>
          </div>
          {currState==="Login"
          ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:
          <p>ALready Have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
          }
          
          
        </form>
    </div>
  )
}

export default LoginPopup