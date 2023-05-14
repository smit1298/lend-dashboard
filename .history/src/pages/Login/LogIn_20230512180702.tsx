import React, { useState } from "react";
import { BrandIcon } from "../../assets/icons/icons";
import "./LogIn.scss";

const pablo = require("../../assets/images/pablo-sign-in.png");

const LogIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

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
        <div>

        </div>
       
      </div>
    </div>
  );
};

export default LogIn;
