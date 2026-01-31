import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import RedBulb from '../assets/images/Red_Bulb.png'
import CyanBulb from '../assets/images/Cyan_Bulb.png'
import LeftArrow from '../assets/images/Left_Arrow.png'
import RightArrow from '../assets/images/Right_Arrow.png'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Games', path: '/games' },
]

export default function Navbar() {
  const [theme, setTheme] = useState('dark')
  const scrollRef = useRef(null)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [hasOverflow, setHasOverflow] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

 const updateScrollButtons = () => {
  const el = scrollRef.current
  if (!el) return

  const { scrollLeft, scrollWidth, clientWidth } = el
  const overflow = scrollWidth > clientWidth

  setHasOverflow(overflow)
  setCanScrollLeft(overflow && scrollLeft > 0)
  setCanScrollRight(
    overflow && scrollLeft + clientWidth < scrollWidth - 1
  )
}

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -150 : 150,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollButtons()

    el.addEventListener('scroll', updateScrollButtons)

    const resizeObserver = new ResizeObserver(updateScrollButtons)
    resizeObserver.observe(el)

    return () => {
      el.removeEventListener('scroll', updateScrollButtons)
      resizeObserver.disconnect()
    }
  }, [])


  return (
    <nav className={`w-full border-b
    ${theme === 'dark' ? 'bg-dark-bg border-dark-accent' : 'bg-light-bg border-light-accent'}`}
    >
      <div className="flex items-center gap-2 px-3 py-1">

        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className={`px-2 py-1 transition rounded-md hover:opacity-80
            ${theme === 'dark' ? 'bg-dark-bg text-dark-accent' : 'bg-light-bg text-light-accent'}`}aria-label="Scroll left"
            >
              
            <img src={LeftArrow} alt="Scroll left" className="w-8 h-8" />
            
          </button>
        )}

        {/* Links */}
        <div ref={scrollRef} className="flex-1 overflow-hidden">
          <ul className={`flex items-center whitespace-nowrap transition-all duration-200
          ${ hasOverflow ? 'gap-2 justify-start' : 'gap-6 justify-center w-full'}`}
          >
            {links.map((link, i) => (
              <li key={`${link.name}-${i}`}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-0.5 text-xs font-bold rounded-md transition
                    ${
                      isActive
                     ? theme === 'dark'
                       ? 'bg-dark-accent text-dark-bg'
                       : 'bg-light-accent text-light-bg'
                     : theme === 'dark'
                     ? 'text-dark-text hover:bg-dark-accent hover:text-dark-bg'
                     : 'text-light-text hover:bg-light-accent hover:text-light-bg'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className={`px-2 py-1 transition rounded-md hover:opacity-80
            ${ theme === 'dark' ? 'bg-dark-bg text-dark-accent' : 'bg-light-bg text-light-accent'}`} aria-label="Scroll right"
            >
              
            <img src={RightArrow} alt="Scroll right" className="w-8 h-8" />
          </button>
        )}
                
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-2 py-1 ml-2 text-sm rounded-md shrink-0 bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:opacity-80"
          aria-label="Toggle theme"
        >
          <img  src={theme === 'dark' ? RedBulb : CyanBulb}  
          alt="Toggle theme" className="w-8 h-8 "
          />
          
        </button>

      </div>
    </nav>
  )
}