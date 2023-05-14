import React, { useState } from "react";
import { BrandIcon } from "../../assets/icons/icons";
import "./LogIn.scss";
import Dashboard from "../Dashboard/Dashboard";

const pablo = require("../../assets/images/pablo-sign-in.png");

const LogIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
 const handleShowPassword = () => {
  setShowPassword(!showPassword)
 }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      if (isValidEmail === true && password.length > 0) {
        setIsLoggedIn(true);
      } 

  };

   const validateEmail = (email: string): boolean => {
    // Regex pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div id="login-page">
        <div id="login-left">
          <div id="login-assets-container">
            <div id="login-assets">
              <BrandIcon />
              <img className="login-image" src={pablo} alt="" />
            </div>
          </div>
        </div>

        <div id="login-right">
          <div id="login-details">
            <div id="login-header">
              <h6 className="welcome">Welcome!</h6>
              <p>Enter details to login.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div id="email-container">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div id="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />

                {!showPassword && <p onClick={handleShowPassword}>show</p>}
                {showPassword && <p onClick={handleShowPassword}>hide</p>}
              </div>
              <h6 className="forgot-password">Forgot PASSWORD?</h6>
              {isLoggedIn ? (<Link to="/dashboard">Log In</Link>) : null }
              <button type="submit">Log in</button>
            </form>
          </div>
        </div>
      </div>
      {/* {isLoggedIn && <Dashboard />} */}
    </>
  );
};

export default LogIn;
