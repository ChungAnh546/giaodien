import React, { useState, useEffect } from "react";
import "./login.css";

import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";




export default function Login() {
  

  return (
    <>
      <div className="FormContainer">
        <form action=""className="formLogin" >
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Chat</h1>
          </div>
          <input
            className="inputLogin"
            type="text"
            placeholder="Username"
            name="username"
            
            min="3"
          />
          <input
          className="inputLogin"
            type="password"
            placeholder="Password"
            name="password"
            
          />
          <button type="submit" className="buttonLogin">Log In</button>
  
          <span className="spanLogin">
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
        </form>
        </div>
      
    </>
  );
}

