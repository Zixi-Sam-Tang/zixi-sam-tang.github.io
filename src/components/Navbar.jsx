import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/pixel-avatar.png";
import burgerMenu from "../assets/burger-icon.png";

export function Navbar() {
  var [menu, setMenu] = useState(false);
  return <nav>
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={logo} />
      </div>
      <button onClick={() => { setMenu(!menu); } }>
        <img src={burgerMenu}/>
      </button>
    </div>
    <ul className={menu ? "responsive" : ""}>
      <li>
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <a href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>;
};
