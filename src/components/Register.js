import { useState } from "react";
import { Login } from "./login";

export function SignUp({ onSignInClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {};

  return (
    <div className="container" id="container">
      <div className={`form-container sign-in`}>
        <div className="form">
          <h1>Create Account</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>Already a user?</h1>
            <button onClick={onSignInClick}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
