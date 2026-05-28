import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyGrid from '../components/BodyGrid'
import CyanLogo from '../assets/images/Cyan_Logo.png'
import TopicBlock from '../components/TopicBlock'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 dark:bg-zinc-950">

      <Header title="Gabriel Garcia's Portfolio" subtitle="Building, Learning, and Leveling Up"/>

      <main className="flex-grow px-6 py-10 space-y-10">

        {/* First section */}
        <BodyGrid
          rows={1}
          cols={1}
          items={[
            <TopicBlock title="Welcome to My Developer Portfolio">
              <p>Thank you for visiting my site. This space serves as a curated look into my work as a developer — from hands‑on projects to technical notes and ongoing learning. Whether you're an employer evaluating my skills, a collaborator exploring my work, or simply someone curious about what I build, I’m glad you’re here.</p>
              <br/>
              <p>I come from a multidisciplinary background with degrees in <b>Video Game Simulation & Development</b> and <b>Computer Science</b>, and I’m currently completing my <b>Cybersecurity degree this fall </b>. This blend of creativity, engineering, and security shapes how I approach every project: thoughtful design, clean architecture, and a focus on building things that are both functional and resilient.</p>    
            </TopicBlock>
          ]}
        />
        {/* Second section */}
        <BodyGrid
          rows={1}
          cols={1}
          items={[
            <TopicBlock title="Explore My Work and Learning">
              <p>Beyond this homepage, the site is organized into dedicated sections that highlight different aspects 
              of my development journey:</p>

              <ul className="space-y-2 list-inside list-dis1c">
                <li><strong>Projects</strong> — A collection of software builds, tools, and experiments that demonstrate my technical skills and problem‑solving approach.</li>  
                <li><strong>Games</strong>  — Interactive prototypes and gameplay systems inspired by my background in game development.</li>  
                <li><strong>Notes</strong> — My personal knowledge base, written in Markdown, covering topics from programming concepts to cybersecurity fundamentals.</li>
              </ul>
              <p>Each section grows over time as I continue learning, building, and refining my craft. This site is 
              both a showcase and a living archive of my progress.</p>
            </TopicBlock>
          ]}
        />
        {/* Third section */}
        <BodyGrid
          rows={1}
          cols={1}
          items={[
            <TopicBlock title="How This Site Was Built">
              This website is powered by React and styled with Tailwind CSS, giving it a clean, responsive, and 
              modern feel. All written content — including project descriptions, notes, and documentation — is 
              stored as Markdown files in a separate GitHub repository and fetched dynamically at runtime.

              The site is deployed through GitHub Pages, making updates fast and seamless. I designed it to be 
              modular, easy to maintain, and flexible enough to grow with my skills. The structure, layout, and 
              overall polish were refined with help from Microsoft Copilot, making this project both a portfolio 
              piece and a personal learning tool.
            </TopicBlock>
          ]}
        />
        
      </main>
      <Footer />
    </div>
  )
}