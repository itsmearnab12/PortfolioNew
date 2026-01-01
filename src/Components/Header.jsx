import { NavLink } from 'react-router-dom';
import "./Header.css"
export function Header() {
    return (
        <header className="Navbar">
            <div className="LeftNavbar">
                <h3>Arnab Choudhury</h3>
            </div>
            <div className="RightNavbar">
                <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/About">About</NavLink>
                <NavLink className="link" to="/Project">Project</NavLink>
                <NavLink className="link" to="/Experience">Experience</NavLink>
                <NavLink className="link" to="/Certificate">Certificate</NavLink>
                <NavLink className="link" to="/Contact">Contact</NavLink>
            </div>
        </header>

    );
}