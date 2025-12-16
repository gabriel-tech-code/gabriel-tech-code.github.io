import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Gabriel’s Dev Hub</h1>

      <div className="link-section">
        <h2>Tailwind Pages</h2>
        <a href="/portfolio">Portfolio</a>
        <a href="/resume">Resume</a>
        <a href="/games">JavaScript Games</a>
      </div>

      <div className="link-section">
        <h2>Bootstrap Pages</h2>
        <a href="/work-projects">Work Projects</a>
        <a href="/my-projects">My Projects</a>
        <a href="/notes">Notes</a>
      </div>
    </div>
  );
}

