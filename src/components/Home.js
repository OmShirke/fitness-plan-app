import React from "react";
import { Navbar } from "./Navbar";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="flex">
        <div className="home-content">
          <h1>Welcome to Fitness App</h1>
        </div>
        <div className="para">
          <p>Explore fitness activities and track your progress!</p>
        </div>
      </div>
    </div>
  );
};
