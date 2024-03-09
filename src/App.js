import "./App.css";
import React, { useState } from "react";
import { Login } from "./components/login";
import { SignUp } from "./components/Register";

export default function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div>
      {isSignUp ? (
        <Login onSignInClick={handleSignInClick} />
      ) : (
        <SignUp onSignUpClick={handleSignUpClick} />
      )}
    </div>
  );
}
