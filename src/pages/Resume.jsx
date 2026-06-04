import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyGrid from '../components/BodyGrid'
import TopicBlock from '../components/TopicBlock'

import NCL_CyberSkyline from '../assets/images/NCL_CyberSkyline.webp'
import NCL_Diamond from '../assets/images/NCL_Diamond.svg'
import NCL_Platinum from '../assets/images/NCL_Platinum.svg'
import NCL_Gold from '../assets/images/NCL_Gold.svg'

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

        <Header title="Welcome to My Resume" subtitle="Building, Learning, and Leveling Up"/>

        <main className="flex-grow px-6 py-10 space-y-10">

        {/* First section */}
        <BodyGrid
          rows={1}
          cols={1}
          items={[
            <TopicBlock title="" center={true}>
              <h1 className="text-3xl font-bold text-red-600 dark:text-cyan-400">Gabriel P. Garcia </h1>
              <p><b>Software Developer | Cybersecurity Student </b></p>
              <p>
                San Benito, Texas - 
                <a href="https://linkedin.com/in/gabriel-garcia-tech"> Gabriel's LinkedIn</a> - 
                <a href="https://github.com/gabriel-tech-code"> Gabriel's GitHub</a>
              </p>
            </TopicBlock>
          ]}
        />
        
        <div className="w-full max-w-3xl prose dark:prose-invert justify-self-center">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      
        <div className="flex flex-wrap justify-center gap-4">
          <img src={NCL_CyberSkyline} alt="NCL CyberSkyline Logo" className="w-auto h-20"/>
          <div className="flex flex-wrap justify-center gap-4">
            <img src={NCL_Diamond} alt="NCL Diamond Logo" className="w-auto h-20"/>
            <img src={NCL_Platinum} alt="NCL Platinum Logo" className="w-auto h-20"/>
            <img src={NCL_Gold} alt="NCL Gold Logo" className="w-auto h-20"/>
          </div>
        </div>
        </main>

        <Footer />
      </div>
    )
}
