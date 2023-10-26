import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data["success"]) {
          localStorage.setItem("token", data["jwt"]);
          localStorage.setItem("username", data["user"]["full_name"]);
          localStorage.setItem("email", data["user"]["email"]);
          localStorage.setItem("user_id", data["user"]["id"]);
          navigate("/home");
        }
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Network error:", error);
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
          <input
            className="button"
            type="submit"
            value="Sign-in"
            onClickCapture={() => {
              handleLogin(email, password);
            }}
          />
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
