import React from 'react'
import "./auth.css"

const Register = () => {
  return (
    <>

<header>
        <img className = "logo" src="/images/logos/logo.png" alt="Logo" />
    </header>
    <div className = "main-body">
        <form action="">
            <h2 className="header-title">Welcome!</h2>
            <input type="text" placeholder="First Name" />
            <input type="password" placeholder="Last Name" />
            <input type="text" placeholder="Display Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="date" placeholder="Date" />
            <select id="account-type-select" placeholder="Email">
                <option value="1">Developer</option>
                <option value="2">Gamer</option>
            </select>
            <input className = "button" type="submit" value="Sign-up" />
        </form>
    </div>
      
    </>
  )
}

export default Register
