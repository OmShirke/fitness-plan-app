import React from "react";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <h1>Welcome to Fitness App</h1>
        <p>Explore fitness activities and track your progress!</p>
      </div>
    </div>
  );
};
