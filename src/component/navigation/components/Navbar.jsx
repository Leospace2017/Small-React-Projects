import React from "react";
import Logo from "./logo.png";

const Navbar = () => {
  return (
    <>
      <div className="img-container">
        <img src={Logo} />
      </div>
      <ul className="navs">
        {["TicTacToc", "Notiz", "Drumkit"].map((item) => (
          <li key={`link-${item}`} >
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
