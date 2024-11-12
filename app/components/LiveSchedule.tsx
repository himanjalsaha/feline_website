'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronRight, Clock, Video, ExternalLink, ChevronDown, Gamepad, Trophy } from 'lucide-react'
import Gradient from './Gradient'

type Match = {
  id: string
  date: string
  opponent: string
  streamLink: string
  isUpcoming: boolean
  map: string
}

type PastMatch = {
  id: string
  date: string
  opponent: string
  result: string
  score: string
  highlightLink: string
  map: string
}

const matches: Match[] = [
  { id: '1', date: '2024-03-15T20:00:00Z', opponent: 'Team Alpha', streamLink: 'https://twitch.tv/feline', isUpcoming: true, map: 'Neon City' },
  { id: '2', date: '2024-03-18T19:00:00Z', opponent: 'Omega Squad', streamLink: 'https://twitch.tv/feline', isUpcoming: true, map: 'Quantum Realm' },
  { id: '3', date: '2024-03-22T21:00:00Z', opponent: 'Cyber Knights', streamLink: 'https://twitch.tv/feline', isUpcoming: true, map: 'Neo Tokyo' },
]

const pastMatches: PastMatch[] = [
  { id: '1', date: '2024-03-10', opponent: 'Digital Wolves', result: 'Win', score: '16-14', highlightLink: 'https://youtube.com/watch?v=highlight1', map: 'Neon City' },
  { id: '2', date: '2024-03-05', opponent: 'Neon Tigers', result: 'Loss', score: '13-16', highlightLink: 'https://youtube.com/watch?v=highlight2', map: 'Quantum Realm' },
  { id: '3', date: '2024-02-28', opponent: 'Pixel Pirates', result: 'Win', score: '16-10', highlightLink: 'https://youtube.com/watch?v=highlight3', map: 'Neo Tokyo' },
]

const StatusBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center space-x-2 font-mono text-xs">
    <motion.span
      className="inline-block w-2 h-2 bg-red-700 rounded-full"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <span className="text-[#613AE8] border border-[#613AE8]/20 px-3 py-1.5">
      {children}_
    </span>
  </div>
)

const MatchInfo = ({ children, icon: Icon }: { children: React.ReactNode; icon: React.ElementType }) => (
  <div className="text-xs text-[#613AE8] font-mono border border-[#613AE8]/20 px-3 py-1.5 rounded-none relative flex items-center space-x-2">
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#613AE8]" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#613AE8]" />
    <Icon className="w-4 h-4" />
    <span>{children}</span>
  </div>
)

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
      } else {
        setTimeLeft('Match started!')
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <motion.div
      className="font-mono text-sm text-[#613AE8] flex items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Clock className="inline-block mr-2 h-4 w-4" />
      {timeLeft}
    </motion.div>
  )
}

const MatchCard = ({ match }: { match: Match }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="bg-[#1A1A2E] p-4 border border-[#613AE8]/30 relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(97, 58, 232, 0.5)' }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#613AE8]/0 via-[#613AE8]/5 to-[#613AE8]/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm">{new Date(match.date).toLocaleDateString()}</span>
        <CountdownTimer targetDate={match.date} />
      </div>
      <div className="font-bold mb-2 text-lg">Feline vs {match.opponent}</div>
      <div className="flex justify-between items-center mb-2">
        <MatchInfo icon={Gamepad}>{match.map}</MatchInfo>
        <a
          href={match.streamLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-[#613AE8] hover:underline group"
        >
          Watch Stream 
          <motion.div
            className="ml-1"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink className="h-4 w-4" />
          </motion.div>
        </a>
      </div>
    </motion.div>
  )
}

const PastMatchCard = ({ match }: { match: PastMatch }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="bg-[#1A1A2E] p-4 border border-[#613AE8]/30 relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(97, 58, 232, 0.5)' }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#613AE8]/0 via-[#613AE8]/5 to-[#613AE8]/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm">{match.date}</span>
        <span className={`font-mono text-sm ${match.result === 'Win' ? 'text-green-400' : 'text-red-400'}`}>
          {match.result} ({match.score})
        </span>
      </div>
      <div className="font-bold mb-2 text-lg">Feline vs {match.opponent}</div>
      <div className="flex justify-between items-center mb-2">
        <MatchInfo icon={Gamepad}>{match.map}</MatchInfo>
        <a
          href={match.highlightLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-[#613AE8] hover:underline group"
        >
          Watch Highlights
          <motion.div
            className="ml-1"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Video className="h-4 w-4" />
          </motion.div>
        </a>
      </div>
    </motion.div>
  )
}

export default function EsportsMatchShowcase() {
  const [showAllPastMatches, setShowAllPastMatches] = useState(false)

  return (
    <div className="bg-[#0B0014] text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <StatusBadge>LIVE.MATCHES</StatusBadge>
          <h2 className="text-2xl text-nowrap sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-3 md:mb-2">
  <span className="text-[#613AE8]">[FELINES]</span> MATCH <Gradient> <span className='font-asgard'>S</span>CHEDULE_</Gradient>
</h2>

          <p className="text-[#613AE8]/70 font-mono">Compete. Dominate. Conquer.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upcoming Matches */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#613AE8] flex items-center">
              <Trophy className="mr-2" />
              Upcoming Matches_
            </h3>
            <div className="space-y-4">
              {matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </motion.div>

          {/* Recent Matches */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#613AE8] flex items-center">
              <Gamepad className="mr-2" />
              Recent Matches_
            </h3>
            <div className="space-y-4">
              <AnimatePresence>
                {(showAllPastMatches ? pastMatches : pastMatches.slice(0, 3)).map((match) => (
                  <PastMatchCard key={match.id} match={match} />
                ))}
              </AnimatePresence>
            </div>
            {pastMatches.length > 3 && (
              <motion.button
                className="mt-4 text-[#613AE8] font-mono text-sm flex items-center"
                onClick={() => setShowAllPastMatches(!showAllPastMatches)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllPastMatches ? 'Show Less' : 'Show More'}
                <motion.div
                  animate={{ rotate: showAllPastMatches ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
              </motion.button>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#full-schedule"
            className="inline-flex items-center px-6 py-2 bg-[#613AE8]/10 border border-[#613AE8] text-[#613AE8] hover:bg-[#613AE8]/20 transition-colors group"
          >
            View Full Schedule 
            <motion.div
              className="ml-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </div>
  )
}