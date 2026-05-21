import { Routes, Route } from "react-router-dom";

import MarkdownPage from "./pages/MarkdownPage";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />

        {/* dynamic route for markdown pages */}
        <Route path="/content/:folder/:file" element={<MarkdownPage />} />
      </Routes>
    </div>
  );
}