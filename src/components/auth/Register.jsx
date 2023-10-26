import React, { useState } from 'react';
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userType, setUserType] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");


  const handleRegistration = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: firstName,
          last_name: lastName,
          user_name: userName,
          email: email,
          password: password,
          user_type: userType,
          date_of_birth: dateOfBirth
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
          <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
          <select id="account-type-select" value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="developer">Developer</option>
            <option value="gamer">Gamer</option>
          </select>

          <input className="button" type="submit" value="Sign-up" />
          <p style={{ color: "white", cursor: "pointer", display: "flex" }}>Already have an Account? <p style={{ marginLeft: "10px", color: "#E1AF64", cursor: "pointer" }} onClick={() => navigate("/")}>Login</p></p>
        </form>
      </div>
    </>
  );
}

export default Register;
