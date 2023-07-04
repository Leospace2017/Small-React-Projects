import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (


      <ul className="navs">
        {["TicTacToc", "Note", "Drumkit","VanBus"].map((item) => (
          <li key={`link-${item}`} >
            <div />
            <NavLink to={`${item}`}>{item}</NavLink>
          </li>
        ))}
      </ul>

  );
};

export default Navbar;
