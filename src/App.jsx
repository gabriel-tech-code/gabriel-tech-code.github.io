import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Games from "./pages/Games";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Revature from "./pages/Revature";
import TSTC from "./pages/TSTC";
import UTRGV from "./pages/UTRGV";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/revature" element={<Revature />} />
        <Route path="/tstc" element={<TSTC />} />
        <Route path="/utrgv" element={<UTRGV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:file" element={<Projects />} />
      </Routes>
    </div>
  );
}