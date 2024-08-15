'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navItems } from '@/constants'

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(true)
  let lastScrollTop = 0

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1)
    const targetElement = document.getElementById(targetId || '')
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  const handleScrollEvent = () => {
    const scrollTop = window.scrollY
    setIsSticky(scrollTop > 100)
    setScrollingUp(scrollTop < lastScrollTop)
    lastScrollTop = scrollTop
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)
    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <header className="h-screen flex flex-col justify-center items-center p-4 relative">
        <motion.div
          className="text-center text-white z-10"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1, ease: 'easeOut' }}>
          <h1 className="text-secondary text-6xl md:text-8xl font-bold mb-3 capitalize">
            I craft & perfect
          </h1>
          <p className="text-xl md:text-3xl text-accent/80 capitalize">digital experiences</p>
        </motion.div>
      </header>
      <motion.nav
        className={`${
          isSticky
            ? 'fixed top-0 left-0 w-full bg-background bg-opacity-50 shadow-md transition-transform transform translate-y-0 z-50'
            : 'px-2 rounded-3xl absolute bg-background bg-opacity-60 bottom-8 left-1/2 transform -translate-x-1/2'
        } ${scrollingUp ? 'translate-y-0' : 'translate-y-5'}`}>
        <ul className="flex justify-center space-x-6 p-4 text-lg">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              transition={{ duration: 0.5, ease: 'easeOut' }}>
              <a
                href={item.href}
                onClick={handleScroll}
                className="hover:text-primary transition-colors">
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </>
  )
}

export default Header
