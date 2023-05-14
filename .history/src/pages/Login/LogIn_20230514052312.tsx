import React, { useState } from "react";
import { BrandIcon } from "../../assets/icons/icons";
import "./LogIn.scss";

const pablo = require("../../assets/images/pablo-sign-in.png");

const LogIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
 const handleShowPassword = () => {
  se
 }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
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
            </div>
            <h6 className="forgot-password">Forgot PASSWORD?</h6>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
