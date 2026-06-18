import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyGrid from '../components/BodyGrid'
import TopicBlock from '../components/TopicBlock'
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import GHNavbar from "../components/GitHubNavbar";

export default function Projects() {
  const [activeFile, setActiveFile] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!activeFile) return;

    fetch(activeFile.download_url)
      .then(res => res.text())
      .then(text => setContent(text));
  }, [activeFile]);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 dark:bg-zinc-950">

      <Header title="Welcome to My Projects" subtitle="Building, Learning, and Leveling Up"/>

      <main className="flex-grow px-6 py-10 space-y-10">
        <div className="flex">
          <GHNavbar
            folder="projects"
            activeFile={activeFile?.name}
            onSelect={setActiveFile}
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
  )
}