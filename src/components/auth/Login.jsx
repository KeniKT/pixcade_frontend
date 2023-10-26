import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission and page refresh

    try {
      const response = await fetch("http://localhost:3000/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data["success"]) {
          localStorage.setItem("token", data["jwt"]);
          localStorage.setItem("email", data["user"]["email"]);
          localStorage.setItem("user_id", data["user"]["id"]);
          navigate("/home");
        } else {
          console.error("Authentication failed");
        }
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header>
        <img className="logo" src="/images/logos/logo.png" alt="Logo" />
      </header>
      <div className="main-body">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Sign-in
          </button>
          <p style={{ color: "white", cursor: "pointer", display: "flex" }}>
            Don't have an Account?{" "}
            <span
              style={{
                marginLeft: "10px",
                color: "#E1AF64",
                cursor: "pointer",
              }}
              onClick={() => navigate("/register")}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
