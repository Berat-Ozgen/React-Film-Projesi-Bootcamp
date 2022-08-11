import React from 'react'
import { useState } from 'react'
import './login.css'


const Login = ({setLogin,userLogin, setUserLogin}) => {

  const [error,setError] = useState(false)
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()

  console.log(username)
  console.log(password)



  const onClickLogin = (e) => {
      if(username === "berat" && password === "123456") {
        setLogin(false)
        setUserLogin(true)

      } else {
        setError(true)

        setTimeout(() => {
          setError(false)

        }, 2000);

      }
  }

  return (
    <div className='login-component'>
   <div onClick={() => setLogin(false)} className='back-span'>HOME</div>
        
  
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3 style={{color: "yellow"}}>Login Here</h3>

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