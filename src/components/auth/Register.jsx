import React, { useState } from 'react';
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
  
    fetch("http://localhost:3000/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        client: {
          email: email,
          password: password
        }
      })
    })
      .then(async response => {
        if (response.ok) {
          navigate("/");
        } else {
          const errorData = await response.json();
          console.error(errorData);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  

  return (
    <>
      <header>
        <img className="logo" src="/images/logos/logo.png" alt="Logo" />
      </header>
      <div className="main-body">
        <form onSubmit={handleRegistration}>
          <h2 className="header-title">Welcome!</h2>
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <input type="text" placeholder="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <input type="date" placeholder="Date" />
          <select id="account-type-select" placeholder="Email">
            <option value="1">Developer</option>
            <option value="2">Gamer</option>
          </select>
          <input className="button" type="submit" value="Sign-up" />
          <p style={{ color: "white", cursor: "pointer", display: "flex" }}>Already have an Account? <p style={{ marginLeft: "10px", color: "#E1AF64", cursor: "pointer" }} onClick={() => navigate("/")}>Login</p></p>
        </form>
      </div>
    </>
  );
}

export default Register;