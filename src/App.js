import "./App.css";
import React, { useState } from "react";
import { BrowseRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { SignUp } from "./components/Register";
import { Home } from "./components/Home";

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
        <SignUp onSignInClick={handleSignInClick} />
      ) : (
        <Login onSignUpClick={handleSignUpClick} />
      )}
    </div>
  );
}
