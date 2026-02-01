import Navbar from './Navbar'
import CyanLogo from '../assets/images/Cyan_Logo.png'
import RedLogo from '../assets/images/Red_Logo.png'

export default function Header({ title, subtitle }) {
  return (
    <header className="border-b bg-dark-bg dark:bg-zinc-950 border-zinc-800">
      <div className="flex items-center justify-between px-6 py-6">

        <div className="flex-shrink-0">
          <img src={RedLogo} alt="Gabriel Tech Logo" className="w-auto h-20 dark:hidden"/>
          <img src={CyanLogo} alt="Gabriel Tech Logo" className="hidden w-auto h-20 dark:block"/>
        </div>

        <div className="flex-1 text-right sm:text-center">
          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>
          <p className="mt-1 text-sm font-medium text-light-accent dark:text-dark-accent">
            {subtitle}
          </p>
        </div>

      </div>

      <Navbar />
    </header>
  )
}