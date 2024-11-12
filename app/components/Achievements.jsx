'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Award } from 'lucide-react'
import Image from 'next/image'

const FadeInWhenVisible = ({ children }) => {
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

  const achievements = [ { icon: Trophy, title: "Snapdragon ESL Pro Series", description: "LAN Finalist", year: "2024", logo: "/snapdragon.png" }, { icon: Trophy, title: "CODM World Championship", description: "Finished 5th", year: "2024", logo: "/callofduty.png" }, { icon: Trophy, title: "i2K Underdog League", description: "Champions", year: "2024", logo: "/i2kt.png" }, { icon: Award, title: "CODM Tussle Thrive", description: "2nd Runners Up", year: "2024", logo: "/tussle.png" } ]

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

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {achievements.map((achievement, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div
                className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-[#613AE8]/20 p-8 rounded-lg relative group h-[300px] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <achievement.icon className="w-10 h-10 text-[#613AE8]" />
                  <Image
                    src={achievement.logo}
                    alt={`${achievement.title} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 mb-4">{achievement.description}</p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-4xl font-bold text-[#613AE8]">{achievement.year}</div>
                  <div className="text-xs font-mono text-[#613AE8] opacity-0 group-hover:opacity-100 transition-opacity">
                    ACHIEVEMENT.0{index + 1}
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
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
                  4
                </div>
                <div className="text-xs font-mono text-[#613AE8] mt-2">MAJOR TITLES</div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  )
}