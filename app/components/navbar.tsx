'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [time, setTime] = useState('00:00')
  const pathname = usePathname()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const isHomePage = pathname === '/'

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl flex justify-start items-center font-bold text-white tracking-wider">
              フェリン // FELINE
              <Image src="/logo.png" alt="logo" width={100} height={100} className="size-14 p-2"/>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {isHomePage ? (
                <>
                  <Link href="/" className="text-purple-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out">
                    Home
                  </Link>
                  <Link href="/players" className="text-purple-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out">
                    Show Players
                  </Link>
                  <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
                  <NavLink onClick={() => scrollToSection('achievements')}>Achievements</NavLink>
                  <NavLink onClick={() => scrollToSection('jerseys')}>Jerseys</NavLink>
                  <NavLink onClick={() => scrollToSection('schedule')}>Schedule</NavLink>
                </>
              ) : (
                <>
                 <Link href="/" className="text-purple-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out">
                    Home
                  </Link>
                
                  <Link href="/players" className="text-purple-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out">
                    Show Players
                  </Link>
                </>
              )}
              <div className="text-sm text-purple-300 font-mono">
                {time} <span className="text-[#613AE8]">EST</span>
              </div>
              <Link href='/join'>
                <button className="bg-[#613AE8]/10 border border-[#613AE8] px-4 py-1.5 text-sm text-purple-300 hover:bg-[#613AE8]/20 transition-all duration-300 ease-in-out">
                  Join Force
                </button>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
            {isHomePage ? (
              <>
                <MobileNavLink onClick={() => scrollToSection('about')}>About</MobileNavLink>
                <MobileNavLink onClick={() => scrollToSection('achievements')}>Achievements</MobileNavLink>
                <MobileNavLink onClick={() => scrollToSection('jerseys')}>Jerseys</MobileNavLink>
                <MobileNavLink onClick={() => scrollToSection('schedule')}>Schedule</MobileNavLink>
              </>
            ) : (
              <>
                <Link href="/join" className="block text-purple-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out">
                  Join Force
                </Link>
                <Link href="/players" className="block text-purple-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out">
                  Show Players
                </Link>
              </>
            )}
            <div className="text-sm text-purple-300 font-mono px-3 py-2">
              {time} <span className="text-[#613AE8]">EST</span>
            </div>
            <Link href='/join'>
              <button className="block w-full text-left bg-[#613AE8]/10 border border-[#613AE8] px-3 py-2 text-base text-purple-300 hover:bg-[#613AE8]/20 transition-all duration-300 ease-in-out">
                Join Force
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function NavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="text-purple-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out"
    >
      {children}
    </button>
  )
}

function MobileNavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="text-purple-300 hover:text-white block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out"
    >
      {children}
    </button>
  )
}