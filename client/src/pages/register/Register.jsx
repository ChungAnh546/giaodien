import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";


import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
 

  return (
    <>
      <div className="FormContainerR">
        <form action="" className="formregis">
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Chat</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="inputregis"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="inputregis"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="inputregis"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className="inputregis"
          />
          <button type="submit" className="buttonregis">Create User</button>

          <span className="spanregis">
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
        </div>
     
    </>
  );
}
