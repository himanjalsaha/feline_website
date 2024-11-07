'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { ChevronRight, Terminal } from 'lucide-react'
import Link from 'next/link'
import Gradient from './Gradient'

const TacticalElement = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs text-[#613AE8] font-mono border border-[#613AE8]/20 px-3 py-1.5 rounded-none relative">
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#613AE8]" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#613AE8]" />
    {children}
  </div>
)

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.2,
            delay,
            ease: "easeOut" 
          } 
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutFeline() {
  return (
    <div className="bg-[#0B0014] text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection>
          <div className="flex justify-between items-center mb-12">
            <div className="space-y-2">
              <TacticalElement>GAME.ON</TacticalElement>
              <h2 className="text-4xl font-bold tracking-tight mt-4">
                About <span className="text-[#613AE8] font-mono">[FELINE]</span> <Gradient>Esports</Gradient>
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <Terminal className="text-[#613AE8]" />
              <TacticalElement>FLN-24.ACTIVE</TacticalElement>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 font-mono leading-relaxed">
                {'>'} SYSTEM.INITIALIZING_
              </p>
              <p className="text-lg text-gray-300">
                Feline Esports is not just a team – we are a force built for competitive excellence. Our players push beyond limits, engaging in the most intense battles in esports to secure victories across every front.
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-px flex-grow bg-gradient-to-r from-[#613AE8] to-transparent"></div>
                <TacticalElement>MISSION.READY</TacticalElement>
              </div>
              <p className="text-lg text-gray-300">
                Each member of the Feline squad is strategically deployed with a singular focus: to dominate and innovate in esports. With precision and skill, we strive to redefine what it means to compete.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#613AE8]/10 to-transparent rounded-none transform skew-x-6"></div>
              <div className="relative bg-[#1A1A2E] p-6 border border-[#613AE8]/30">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#613AE8]" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#613AE8]" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#613AE8]" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#613AE8]" />
                
                <h3 className="text-2xl font-mono font-semibold mb-4">OUR TACTICAL <Gradient>GOALS_</Gradient></h3>
                <ul className="space-y-4">
                  {['Dominate the competitive landscape across various esports games',
                    'Foster the growth of next-gen esports athletes',
                    'Innovate strategies and redefine competitive standards'].map((text, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="flex-shrink-0 h-6 w-6 rounded-none bg-[#613AE8]/20 flex items-center justify-center mr-3 group-hover:bg-[#613AE8]/30 transition-colors">
                        <ChevronRight className="w-4 h-4 text-[#613AE8]" />
                      </div>
                      <p className="font-mono">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Matches Won', value: '300+', subtitle: 'Incredible wins across tournaments' },
              { title: 'Team Strength', value: '150+', subtitle: 'Talented players and staff' },
              { title: 'Events Participated', value: '50+', subtitle: 'Global events and leagues' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#1A1A2E] p-6 border border-[#613AE8]/30 relative group hover:border-[#613AE8]/50 transition-colors">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#613AE8] group-hover:w-4 group-hover:h-4 transition-all" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#613AE8] group-hover:w-4 group-hover:h-4 transition-all" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#613AE8] group-hover:w-4 group-hover:h-4 transition-all" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#613AE8] group-hover:w-4 group-hover:h-4 transition-all" />
                <h4 className="text-xl font-mono font-semibold mb-2">{stat.title}</h4>
                <div className="text-4xl font-bold text-[#613AE8] font-mono">{stat.value}</div>
                <p className="text-sm text-gray-400 mt-2 font-mono">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
        <div className="mt-16 text-center">
  <TacticalElement>JOIN.THE.SQUAD</TacticalElement>
  <p className="mt-4 text-lg text-gray-300 font-mono">
    {'>'} Ready for battle? Join Feline Esports, where the best compete, innovate, and dominate.
  </p>
  <div className='space-y-4 gap-5 mt-10'>
  <a href="/players">
    <button className="bg-transparent border border-[#613AE8] px-4 py-4 text-sm text-purple-300 hover:bg-[#613AE8]/10 transition-colors">
      <span className="relative">SHOW PLAYERS</span>
    </button>
  </a>

  {/* JOIN FORCE Button */}
  <Link href="/players">
    <button className="bg-transparent mx-2 border border-[#613AE8] px-4 py-4 text-sm text-purple-300 hover:bg-[#613AE8]/10 transition-colors">
      <span className="relative">JOIN FORCE</span>
    </button>
  </Link>
</div>


 
</div>

        </AnimatedSection>
      </div>
    </div>
  )
}
