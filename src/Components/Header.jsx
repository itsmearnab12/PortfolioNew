import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="Navbar">
      <div className="LeftNavbar">
        <h3>Arnab Choudhury</h3>
      </div>

      <div className={`RightNavbar ${menuOpen ? "active" : ""}`}>
        <NavLink className="link" to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink className="link" to="/About" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink className="link" to="/Project" onClick={() => setMenuOpen(false)}>Project</NavLink>
        <NavLink className="link" to="/Experience" onClick={() => setMenuOpen(false)}>Experience</NavLink>
        <NavLink className="link" to="/Certificate" onClick={() => setMenuOpen(false)}>Certificate</NavLink>
        <NavLink className="link" to="/Contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>

      <div className="Hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}
