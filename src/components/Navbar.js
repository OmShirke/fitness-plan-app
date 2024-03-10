import React from "react";

// Navbar component
export const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/services" className="nav-link">
            Services
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/plans" className="nav-link">
            Plans
          </a>
        </li>
      </ul>
      <div>
        {isLoggedIn ? (
          <button className="nav-button">Logout</button>
        ) : (
          <a href="/login" className="nav-link">
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
