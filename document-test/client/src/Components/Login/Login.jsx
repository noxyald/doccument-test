import React, {useState} from 'react'
import './login.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/bullion.png'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'



const Login = () => {

        const [loginUserName, setLoginUserName]=useState('')
        const [loginPassword, setLoginPassword]=useState('')

        const LoginUser = ()=>{
            Axios.post('http://localhost:3002/login',{
                loginUserName:loginUserName,
                loginPassword:loginPassword,
            }).then((response)=>{
               console.log(response)
            })
        }


  return (
    <div className='loginPage flex'>
        <div className="container flex">
            
            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>
                <div className="textDiv">
                    <h2 className='title'>Create And Sell Extradionary Products</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="footerDiv flex">
                    <span className='text'>Don't have an account?</span>
                    <Link to={'/register'}>
                    <button className='btn'>Sign Up</button>
                    </Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Welcome Back!</h3>
                </div>

                <form action="" className='form grid'>
                        <span className='Message'>Login Status will go here</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                            <FaUserShield className='icon' />
                            <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                               setLoginUserName(event.target.value)
                            }} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                            <BsFillShieldLockFill className='icon' />
                            <input type="password" id='username' placeholder='Enter Password' onChange={(event)=>{
                                setLoginPassword(event.target.value)
                            }}/>
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={LoginUser}>
                            <span>login</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>

                        <span className='forgotPassword'>
                            Forgot Password? <a href="">Click Here</a>
                        </span>

                </form>
            </div>

        </div>

        
    </div>
  )
}

export default Login