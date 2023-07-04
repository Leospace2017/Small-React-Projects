import React from "react";
import Navbar from "./components/Navbar";
import Logo from "./logo.png";
import "./Navbar.scss";

export default function Navigation() {
  return (
    <nav className="nav-container">
      <div className="img-container">
        <img src={Logo} />
      </div>
      <Navbar />
    </nav>
  );
}
