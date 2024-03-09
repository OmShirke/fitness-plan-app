import React, { useEffect, useState } from "react";
import { SignUp } from "./Register";

export function Login({ OnSignUpClick }) {
  const [currentUser, setCurrentUser] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogIn = async () => {};

  return (
    <div className="container" id="container">
      <div className={`form-container sign-in`}>
        <div className="form">
          <h1>Sign In</h1>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email or Enrollment ID"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button onClick={userLogIn}>Sign In</button>
        </div>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>New to Website?</h1>
            <button onClick={OnSignUpClick}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
