import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import GHNavbar from "../components/GitHubNavbar";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const { file } = useParams(); // "TSTC" or "UTRGV"
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!file) return;
    const url = `https://raw.githubusercontent.com/gabriel-tech-code/content/main/projects/${file}.md`;

    fetch(url)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(() => setContent("# Error\nCould not load content."));
  }, [file]);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 dark:bg-zinc-950">

      <Header title="Welcome to My Projects" subtitle="Building, Learning, and Leveling Up"/>

      <main className="flex-grow px-6 py-10 space-y-10">
        <div className="flex">

          <GHNavbar
            folder="projects"
            activeFile={`${file}.md`}
            onSelect={(f) => navigate(`/projects/${f.name.replace(".md", "")}`)}
          />

          <div className="flex-1 p-6 prose dark:prose-invert max-w-none">
            {content ? (
              <ReactMarkdown>{content}</ReactMarkdown>
            ) : (
              <p className="text-zinc-400">Select a project to view its details.</p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
