import React from 'react'
import './login.css'
import {FaEnvelope} from 'react-icons/fa'
import {MdLock} from 'react-icons/md'

export default function Login() {
  return (
    <div className="main">
        <div className="login-box">
            <div className='logo'>
                <div className='image'/>
            </div>
            <div className='login-text'>
                    <span className='login-title'>Admin Login</span>
                    <form autoComplete='off'>
                        <div className="text-box">
                            <input className='input100' type="text" placeholder='Email'></input>
                            <span className='focus-input100'></span>
                            <span className='symbol-input100'>
                                <FaEnvelope className='symbol' aria-hidden="true"/>
                            </span>
                        </div>
                        <div className="text-box">
                            <input className='input100' type="password" placeholder='Password'></input>
                            <span className='focus-input100'></span>
                            <span className='symbol-input100'>
                                <MdLock className='symbol' aria-hidden="true"/>
                            </span>
                        </div>
                        <div className='container-login100'>
                            <button className='login100-form-btn'>Let's Go</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
  )
}
