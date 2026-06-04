import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyGridGray from '../components/BodyGridGray'
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

        <Header title="Welcome to My Portfolio" subtitle="Building, Learning, and Leveling Up"/>

        <main className="flex-grow px-6 py-10 space-y-10">

        {/* First section */}
        <BodyGridGray
          cols={1}
          items={[
            <TopicBlock title="" >
              <h2 className="font-serif text-3xl italic font-semibold border-red-500 dark:text-cyan-400">
                I'm Gabriel Garcia
              </h2>
              <p>
                A developer with a multidisciplinary background in <strong>Video Game Simulation & Development</strong>, <strong>Computer Science</strong>, and <strong>Cybersecurity</strong>. I enjoy building interactive experiences, secure applications, and tools that blend creativity with technical precision.
              </p>
              <p>
                This portfolio highlights a mix of <strong>academic</strong>, <strong>self‑driven</strong>, and <strong>small professional projects</strong> that reflect my growth as a developer. Each project demonstrates my approach to problem‑solving, design, and continuous learning — from game prototypes to full‑stack applications and cybersecurity experiments.
              </p>
              <p>
                Below, you’ll find a curated list of my work with links to explore each project in detail.
              </p>
            </TopicBlock>
          ]}
        />
        {/* Second section */}
        <BodyGridGray
          cols={1}
          items={[
            <div className="w-full max-w-3xl prose dark:prose-invert justify-self-center">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          ]}
        />
        





        </main>

        <Footer />
      </div>
    )
}
