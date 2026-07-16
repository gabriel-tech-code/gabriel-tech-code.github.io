import { Link } from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyGridGray from '../components/BodyGridGray'
import TopicBlock from '../components/TopicBlock'
import MarkdownReader from "../components/MarkdownReader"
import RevatureLogo from '../assets/images/Rev_logo.png'
import TSTCLogo from '../assets/images/TSTC_logo.png'
import UTRGVLogo from '../assets/images/UTRGV_Logo.jpg'
import LotusLogo from '../assets/images/Lotus_Logo.png'

export default function Portfolio() {
  

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
            <topicBlock title="">
              <MarkdownReader url="https://raw.githubusercontent.com/gabriel-tech-code/content/main/profiles/revature_short.md" />,
                          
              <div className="flex gap-2 text-red-600 dark:text-cyan-400 ">
                <Link to="/revature" className="block w-fit">
                  <img
                    src={RevatureLogo}
                    alt="Revature Logo"
                    className="w-20 h-auto transition-transform duration-200 rounded-xl hover:scale-105"
                  />
                </Link>
                <div >
                  <h3 className="text-lg font-bold">Revature</h3>
                  <p className="text-sm text-zinc-400">
                    Software development experience and team projects.
                  </p>
                </div>
              </div>         
            </topicBlock>
          ]}
        />
        {/* Third section */}
        <BodyGridGray
          cols={1}
          items={[
            <div className="dark:prose-invert">
              <MarkdownReader url="https://raw.githubusercontent.com/gabriel-tech-code/content/main/profiles/school_short.md" />,
            
              <div className="flex items-center gap-2 text-red-600 dark:text-cyan-400">
                <Link to="/revature" className="block w-fit">
                  <img
                    src={TSTCLogo}
                    alt="Texas State Technical College Logo"
                    className="w-20 h-auto transition-transform duration-200 rounded-xl hover:scale-105"
                  />
                </Link>
                <div>
                  <h3 className="text-lg font-bold">Texas State Technical College</h3>
                  <p className="text-sm text-zinc-400">
                    Academic projects and coursework in Video Game Simulation & Development and Cybersecurity.
                  </p>
                </div>
              </div>,
              <div className="flex items-center gap-2 text-red-600 dark:text-cyan-400">
                <Link to="/revature" className="block w-fit">
                  <img
                    src={UTRGVLogo}
                    alt="University of Texas Rio Grande Valley Logo"
                    className="w-20 h-auto transition-transform duration-200 rounded-xl hover:scale-105"
                  />
                </Link>
                <div>
                  <h3 className="text-lg font-bold">University of Texas Rio Grande Valley </h3>
                  <p className="text-sm text-zinc-400">
                    Academic projects and coursework in Computer Science.
                  </p>
                </div>
              </div>
            </div>            
          ]}
        />
        {/* Fourth section */}
        <BodyGridGray
          cols={1}
          items={[
            <div className="dark:prose-invert">
              <MarkdownReader url="https://raw.githubusercontent.com/gabriel-tech-code/content/main/profiles/self_projects_short.md" />,
            
              <div className="flex items-center gap-2 text-red-600 dark:text-cyan-400">
              <Link to="/revature" className="block w-fit">
                <img
                  src={LotusLogo}
                  alt="Lotus Logo"
                  className="w-20 h-auto transition-transform duration-200 rounded-xl hover:scale-105"
                />
              </Link>
              <div>
                <p className="text-sm text-zinc-400">
                  Software development projects driven by personal interest and continuous learning, showcasing a range of technologies and creative problem-solving.
                </p>
              </div>
            </div>
            </div>            
          ]}
        />

        </main>

        <Footer />
      </div>
    )
}
