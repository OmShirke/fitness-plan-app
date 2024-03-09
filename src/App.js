import "./App.css";
import React, { useState } from "react";
import { Login } from "./components/login";
import { SignUp } from "./components/Register";

export default function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    console.log("Sign up button clicked");
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    console.log("Sign up button clicked");
    setIsSignUp(false);
  };

  return (
    <div>
      {isSignUp ? (
        <SignUp onSignInClick={handleSignInClick} />
      ) : (
        <Login onSignUpClick={handleSignUpClick} />
      )}
    </div>
  );
}
