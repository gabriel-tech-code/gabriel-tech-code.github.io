import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyGrid from '../components/BodyGrid'
import CyanLogo from '../assets/images/Cyan_Logo.png'
import TopicBlock from '../components/TopicBlock'

export default function Resume() {
  

  const [content, setContent] = useState("");  

  const url = `https://raw.githubusercontent.com/gabriel-tech-code/content/main/profiles/resume.md`;

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(() => setContent("# Error\nCould not load content."));
  }, [url]);
  
  return (
    
      <div className="flex flex-col min-h-screen bg-zinc-100 dark:bg-zinc-950">

        <Header title="Gabriel Tech" subtitle="Frontend Developer · React · JavaScript"/>

        <main className="flex-grow px-6 py-10 space-y-10 prose dark:prose-invert">
          
          <ReactMarkdown>{content}</ReactMarkdown>

        </main>

        <Footer />
      </div>
    )
}
