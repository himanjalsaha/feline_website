"use client"
import { Link, Menu } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [time, setTime] = useState("00:00")
    useEffect(() => {
        const timer = setInterval(() => {
          const now = new Date()
          const hours = now.getHours().toString().padStart(2, '0')
          const minutes = now.getMinutes().toString().padStart(2, '0')
          setTime(`${hours}:${minutes}`)
        }, 1000)
        return () => clearInterval(timer)
      }, [])
    
  return (
    <nav className="relative z-50">
    <div className="container mx-auto px-4">
      <div className="flex h-14 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white tracking-wider">
          フェリン // FELINE
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="text-sm text-purple-300 font-mono">
            {time} <span className="text-[#613AE8]">EST</span>
          </div>
          <Link
            href="/join"
            className="bg-transparent border border-[#613AE8] px-4 py-1.5 text-sm text-purple-300 hover:bg-[#613AE8]/10 transition-colors"
          >
            Join Force
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </div>
    {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="flex justify-end">
              <button className="text-white" onClick={() => setIsMenuOpen(false)}>
                <Menu className="h-5 w-5" />
              </button>
            </div>
            <Link
              href="/join"
              className="block w-full text-center border border-[#613AE8] px-6 py-3 text-purple-300 hover:bg-[#613AE8]/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Force
            </Link>
          </div>
        </div>
      )}
  </nav>
  )
}

export default Navbar