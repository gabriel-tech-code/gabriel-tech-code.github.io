import { createHashRouter } from "react-router-dom";
import Home from "./pages/Home";

// Tailwind pages
import Portfolio from "./pages/tailwind/Portfolio";
import Resume from "./pages/tailwind/Resume";
import Games from "./pages/tailwind/Games";

// Bootstrap pages
import Projects from "./pages/bootstrap/Projects";
import Notes from "./pages/bootstrap/Notes";
import WorkProjects from "./pages/bootstrap/WorkProjects";

const router = createHashRouter([
  { path: "/", element: <Home /> },

  // Tailwind group
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/resume", element: <Resume /> },
  { path: "/games", element: <Games /> },

  // Bootstrap group
  { path: "/work-projects", element: <WorkProjects /> },
  { path: "/my-projects", element: <Projects /> },
  { path: "/notes", element: <Notes /> },
]
);

export default router;