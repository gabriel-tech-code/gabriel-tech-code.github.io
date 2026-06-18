import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {HiChevronLeft, HiChevronRight, HiMoon, HiSun} from 'react-icons/hi'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Games', path: '/games' },
  { name: 'Projects', path: '/projects' },
  { name: 'Notes', path: '/notes' },
]

export default function Navbar() {
  const [theme, setTheme] = useState('dark')
  const scrollRef = useRef(null)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [hasOverflow, setHasOverflow] = useState(false)

  // Drag-to-scroll state
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)
  
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
  const onDragStart = (e) => {
    isDragging.current = true
    startX.current = e.pageX || e.touches[0].pageX
    scrollStart.current = scrollRef.current.scrollLeft
  }

  const onDragMove = (e) => {
    if (!isDragging.current) return
    const x = e.pageX || e.touches[0].pageX
    const walk = (x - startX.current) * -1 // reverse direction
    scrollRef.current.scrollLeft = scrollStart.current + walk
  }

  const onDragEnd = () => {
    isDragging.current = false
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollButtons()

    // Scroll + resize listeners
    el.addEventListener("scroll", updateScrollButtons)
    const resizeObserver = new ResizeObserver(updateScrollButtons)
    resizeObserver.observe(el)

    // Drag listeners
    el.addEventListener("mousedown", onDragStart)
    el.addEventListener("mousemove", onDragMove)
    el.addEventListener("mouseup", onDragEnd)
    el.addEventListener("mouseleave", onDragEnd)

    // Touch listeners
    el.addEventListener("touchstart", onDragStart)
    el.addEventListener("touchmove", onDragMove)
    el.addEventListener("touchend", onDragEnd)

    // CLEANUP FUNCTION — this is what React calls when the component unmounts
    return () => {
      el.removeEventListener("scroll", updateScrollButtons)
      resizeObserver.disconnect()

      el.removeEventListener("mousedown", onDragStart)
      el.removeEventListener("mousemove", onDragMove)
      el.removeEventListener("mouseup", onDragEnd)
      el.removeEventListener("mouseleave", onDragEnd)

      el.removeEventListener("touchstart", onDragStart)
      el.removeEventListener("touchmove", onDragMove)
      el.removeEventListener("touchend", onDragEnd)
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
            ${theme === 'dark' ? 'text-cyan-400' : 'text-red-600'}`}
            aria-label="Scroll left"
          >
            <HiChevronLeft className="w-8 h-8" />
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
            ${theme === 'dark' ? 'text-cyan-400' : 'text-red-600'}`}
            aria-label="Scroll right"
          >
            <HiChevronRight className="w-8 h-8" />
            
          </button>
        )}
                
        {/* Theme Toggle */}
        <button
            onClick={toggleTheme}
            className="px-2 py-1 ml-2 rounded-md shrink-0 bg-zinc-200 dark:bg-zinc-800 hover:opacity-80"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <HiSun className="w-8 h-8 text-red-500" />
            ) : (
              <HiMoon className="w-8 h-8 text-cyan-400" />
            )}
          
        </button>

      </div>
    </nav>
  )
}