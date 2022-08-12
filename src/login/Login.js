import React from 'react'
import { useState } from 'react'
import './login.css'
import {RiLoginBoxFill} from 'react-icons/ri';
import {GrHome} from 'react-icons/gr';
import { ToastContainer, toast } from 'react-toastify';




const Login = ({setLogin,userLogin, setUserLogin,onProfil,setOnProfil}) => {

  const [error,setError] = useState(false)
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()

  console.log(username)
  console.log(password)



  const onClickLogin = (e) => {
      if(username === "berat" && password === "123456") {
        setLogin(false)
        setUserLogin(true)
        setOnProfil(true)
      } else {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2000);

      }
  }

  return (
    <div className='login-component'>
   <div onClick={() => setLogin(false)} className='back-span'><GrHome/></div>
        

  
   
    <form>
        <h3 style={{color: "yellow"}}><RiLoginBoxFill/> GİRİŞ YAPINIZ</h3>

        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder=" Username " />

        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> <br />

        {
          error === true && <span style={{color:"red"}}>hatalı kullanıcı adı veya şifre</span> 
        }
        
        <div onClick={onClickLogin} class="login">
          <div class="go">Log In</div>
          
        </div>
   
        </form>
    
    </div>
  )
}

export default Login