import React, { useState } from "react";
import "./Navbar.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a className="brand" href="#about" onClick={closeMenu}>
          <span className="brand-mark">ST</span>
          <span className="brand-copy">
            <span className="brand-name">Sam Tang</span>
            <span className="brand-role">Computer Science @ Waterloo</span>
          </span>
        </a>
        <button
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
