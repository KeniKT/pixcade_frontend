import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const ProfileEdit = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [externalLink, setExternalLink] = useState("");
    const [profile , setProfile] = useState("");
  
    const handleEditProfile = (e) => {
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
        <img className="logo" src="/images/logos/logo.png" alt="Logo"  />
      

      <input type="text" placeholder='search'  />
      <i className='fa fa-search search-btn ' ></i>

     
      
      <div className='flex'>

      <img src="src\assets\images\profiles\ima.jpg" className='profile-image' onClick={() => navigate("/editProfile")} />
      <div>
        <label className='welcome-user'> Welcome , user</label>
      </div>
      </div>
        </header>

        <div className='main-body'>
            <form onSubmit={handleEditProfile}>
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
          <input type="text" placeholder="External Link" value={externalLink} onChange={(e) => setExternalLink(e.target.value)} />
        <input type="text" placeholder="Profile" value={profile} onChange={(e) => setProfile(e.target.value)} />


          <input className="button" type="submit" value="Sign-up" />

            </form>

        </div>

    </>
  );
}
  export default ProfileEdit;