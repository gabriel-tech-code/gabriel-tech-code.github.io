import { FaGithub, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="border-t bg-zinc-200 dark:bg-zinc-900 border-zinc-400 dark:border-zinc-800">
      <div className="flex flex-col items-center gap-3 px-6 py-6">
        
        <p className="text-sm text-center text-zinc-900 dark:text-white">
          © 2026 gabriel-tech-code
        </p>


        <div className="flex items-center gap-6 text-zinc-600 dark:text-zinc-400">
            <a href="https://github.com/gabriel-tech-code" target="_blank" rel="noreferrer">
                <FaGithub className="w-5 h-5 transition hover:text-white" title="Deployed on GitHub"/>
            </a>
            <FaReact className="w-5 h-5 text-cyan-400" title="Built with React"/>
            <SiTailwindcss className="w-5 h-5 text-sky-400" title="Styled with Tailwind CSS"/>
        </div>
        <p className="text-xs text-center text-red-700 dark:text-cyan-300">Designed & built with modern web technologies</p>

      </div>
    </footer>
  )
}