import React from 'react'
import "./auth.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/register")
  }
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
                <p style={{ color: "white", cursor: "pointer", display: "flex"}}>Dont have an Account? <p style={{ marginLeft: "10px", color: "#E1AF64", cursor: "pointer"}} onClick={handleRoute}>Sign Up</p></p>
            </form>
        </div>
      
    </>
  )
}

export default Login
