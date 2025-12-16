import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Gabriel’s Dev Hub</h1>

      <div className="link-section">
        <h2>Tailwind Pages</h2>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/games">JavaScript Games</Link>
      </div>

      <div className="link-section">
        <h2>Bootstrap Pages</h2>
        <Link to="/work-projects">Work Projects</Link>
        <Link to="/my-projects">My Projects</Link>
        <Link to="/notes">Notes</Link>
      </div>
    </div>
  );
}

