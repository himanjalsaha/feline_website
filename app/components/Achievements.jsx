'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Target, Crosshair } from 'lucide-react'

const FadeInWhenVisible = ({ children } ) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default function FelineAchievements() {
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
    <div className="relative min-h-screen bg-[#0B0014] text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#613AE8]/20 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#613AE8]/20 blur-[100px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        {/* Micro UI Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-8 left-8 text-xs font-mono text-[#613AE8]"
        >
          フェリンの実績
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-8 right-8 text-xs font-mono text-[#613AE8]"
        >
          {time}
        </motion.div>

        {/* Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#613AE8] to-transparent"
        />

        {/* Main Content */}
        <FadeInWhenVisible>
          <div className="relative z-10 text-center mb-20">
            <div className="text-sm font-mono text-[#613AE8] mb-2">SYS.64.4</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              HALL OF{' '}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#613AE8] to-[#DC2626] text-transparent bg-clip-text">
                F<span className='font-asgard'>A</span>ME
              </span>
            </h2>
            <div className="text-sm font-mono text-[#613AE8] mt-2">VERSION 2.0</div>
          </div>
        </FadeInWhenVisible>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <FadeInWhenVisible>
            <motion.div
              className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-[#613AE8]/20 p-8 rounded-lg relative group"
            >
              <Trophy className="w-8 h-8 text-[#613AE8] mb-4" />
              <h3 className="text-2xl font-bold mb-2">World Finals</h3>
              <p className="text-gray-400 mb-4">Top 3 Finish in CODM Championship</p>
              <div className="text-4xl font-bold text-[#613AE8]">2024</div>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-[#613AE8] opacity-0 group-hover:opacity-100 transition-opacity">
                ACHIEVEMENT.01
              </div>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div
              className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-[#613AE8]/20 p-8 rounded-lg relative group"
            >
              <Target className="w-8 h-8 text-[#613AE8] mb-4" />
              <h3 className="text-2xl font-bold mb-2">Regional Masters</h3>
              <p className="text-gray-400 mb-4">Champions of South Asian Division</p>
              <div className="text-4xl font-bold text-[#613AE8]">2023</div>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-[#613AE8] opacity-0 group-hover:opacity-100 transition-opacity">
                ACHIEVEMENT.02
              </div>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div
              className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-[#613AE8]/20 p-8 rounded-lg relative group"
            >
              <Crosshair className="w-8 h-8 text-[#613AE8] mb-4" />
              <h3 className="text-2xl font-bold mb-2">Win Streak</h3>
              <p className="text-gray-400 mb-4">28 Consecutive Professional Wins</p>
              <div className="text-4xl font-bold text-[#613AE8]">2023</div>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-[#613AE8] opacity-0 group-hover:opacity-100 transition-opacity">
                ACHIEVEMENT.03
              </div>
            </motion.div>
          </FadeInWhenVisible>
        </div>

        {/* Bottom Stats */}
        <FadeInWhenVisible>
          <div className="mt-20 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#2563EB] to-[#DC2626] text-transparent bg-clip-text">
                  150+
                </div>
                <div className="text-xs font-mono text-[#613AE8] mt-2">MATCHES WON</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#2563EB] to-[#DC2626] text-transparent bg-clip-text">
                  1.2M+
                </div>
                <div className="text-xs font-mono text-[#613AE8] mt-2">PRIZE POOL</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#2563EB] to-[#DC2626] text-transparent bg-clip-text">
                  28
                </div>
                <div className="text-xs font-mono text-[#613AE8] mt-2">WIN STREAK</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#2563EB] to-[#DC2626] text-transparent bg-clip-text">
                  5
                </div>
                <div className="text-xs font-mono text-[#613AE8] mt-2">MAJOR TITLES</div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Bottom Tag */}
      
      </div>
    </div>
  )
}