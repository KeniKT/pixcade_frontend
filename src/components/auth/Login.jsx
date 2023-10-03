import React from 'react'
import "./auth.css"

const Login = () => {
  return (
    <>

        <header>
            <img className="logo" src="/images/logos/logo.png" alt="Logo" />
        </header>
        <div className = "main-body">
            <form action="">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input className = "button" type="submit" value="Sign-in" />
            </form>
        </div>
      
    </>
  )
}

export default Login
