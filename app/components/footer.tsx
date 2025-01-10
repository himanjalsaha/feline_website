'use client'

import { motion } from 'framer-motion'
import {  Twitch, Youtube } from 'lucide-react'
import { BsDiscord, BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from "react-icons/fa6";
const socialLinks = [
  { name: 'Twitter', icon: FaXTwitter, url: 'https://x.com/TeamFelinesIN' },
  
  { name: 'Instagram', icon: BsInstagram, url: 'https://www.instagram.com/teamfelines.in' },
  { name: 'Discord', icon: BsDiscord, url: 'https://discord.gg/7tjx2F2a' },
]

export default function CyberpunkFooter() {
  return (
    <footer className="bg-[#0B0014] text-white relative overflow-hidden border-t border-[#613AE8]/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-5" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#613AE8] to-transparent" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#613AE8] rounded-full blur-[128px] -z-10 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-mono text-[#613AE8] mb-2 block">フォルカフォルカ_</span>
                <h2 className="text-2xl font-bold tracking-tight">
                  <span className="text-white">[FELINES]</span>
                  <span className="text-[#613AE8]">.ERA</span>
                  <span className="text-blue-400">2.0</span>
                </h2>
              </motion.div>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <div className="h-px w-8 bg-[#613AE8]" />
                <span className="text-xs font-mono text-[#613AE8]">CONNECT_WITH_US</span>
              </div>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#613AE8] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2">
                <div className="h-px w-8 bg-[#613AE8]" />
                <span className="text-xs font-mono text-[#613AE8]">LOCATION_</span>
              </div>
              <p className="text-sm text-gray-400 font-mono">
                LAT: 35.6762° N<br />
                LONG: 139.6503° E<br />
                INDIA.BASE_01
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <div className="h-px w-8 bg-[#613AE8]" />
                <span className="text-xs font-mono text-[#613AE8]">JOIN_THE_FORCE</span>
              </div>
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#1A1A2E] border border-[#613AE8]/20 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#613AE8] transition-colors duration-300"
                  />
                  <div className="absolute top-0 right-0 h-full px-4 flex items-center border-l border-[#613AE8]/20">
                    <span className="text-xs font-mono text-[#613AE8]">01</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#613AE8]/10 border border-[#613AE8] px-4 py-2 text-[#613AE8] hover:bg-[#613AE8]/20 transition-colors duration-300 font-mono text-sm"
                >
                  SUBSCRIBE_TO_UPDATES
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <div className="h-px w-8 bg-[#613AE8]" />
                <span className="text-xs font-mono text-[#613AE8]">SYSTEM_INFO</span>
              </div>
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="space-y-2">
                  <p className="text-gray-400">VERSION_</p>
                  <p className="text-white">2.0.24</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400">LAST_UPDATE_</p>
                  <p className="text-white">2024.03.12</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400">STATUS_</p>
                  <p className="text-green-400">ONLINE</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400">UPTIME_</p>
                  <p className="text-white">99.9%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#613AE8]/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-gray-400">©2024_</span>
              <span className="text-xs font-mono text-[#613AE8]">FELINES.SYSTEMS</span>
            </div>
            <div className="flex space-x-8">
              <motion.a 
                href="/privacy" 
                className="text-xs font-mono text-gray-400 hover:text-[#613AE8] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                PRIVACY_POLICY
              </motion.a>
              <motion.a 
                href="/terms" 
                className="text-xs font-mono text-gray-400 hover:text-[#613AE8] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                TERMS_OF_SERVICE
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}