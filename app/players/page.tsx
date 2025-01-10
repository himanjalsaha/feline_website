'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Twitter, Twitch, ChevronRight } from 'lucide-react'
import Image from 'next/image'

type RosterType = 'fps' | 'moba';

interface Player {
  name: string;
  image: string;
  role?: string;
  twitter?: string;
  twitch?: string;
}

type Rosters = {
  [key in RosterType]: Player[]
}

// Skeleton loader component
const ImageSkeleton = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-[#0B0014] via-[#1a1a1a] to-[#0B0014] animate-pulse">
    <div className="h-full w-full bg-gradient-to-r from-transparent via-[#613AE8]/10 to-transparent animate-shimmer" 
      style={{ 
        backgroundSize: '200% 100%',
        animation: 'shimmer 2s infinite linear'
      }}
    />
  </div>
)

const StatusBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center space-x-2 font-mono text-xs">
    <span className="text-[#613AE8]" aria-hidden="true">&gt;</span>
    <span className="text-[#613AE8] border border-[#613AE8]/20 px-3 py-1.5">
      {children}_
    </span>
  </div>
)

interface PlayerCardProps {
  name: string;
  role?: string;
  image: string;
  twitter?: string;
  twitch?: string;
}

const PlayerCard = ({ name, role, image, twitter, twitch }: PlayerCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div 
      className="bg-[#0B0014] rounded-none border border-[#613AE8]/30 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="article"
      aria-label={`Player profile for ${name}`}
    >
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#613AE8] z-10" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#613AE8] z-10" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#613AE8] z-10" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#613AE8] z-10" aria-hidden="true" />
        
        {!imageLoaded && !imageError && <ImageSkeleton />}
        
        <Image 
          width={400} 
          height={400} 
          src={imageError ? '/placeholder.svg?height=400&width=400' : image} 
          alt={`${name}'s profile picture`}
          className={`w-full h-full object-cover object-center transition-all duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0014] via-[#0B0014]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <StatusBadge>PLAYER.PROFILE</StatusBadge>
          <h3 className="text-xl font-mono font-bold mt-2 mb-1">[{name}]</h3>
          {role && <p className="text-sm text-gray-400 font-mono">&gt; {role}_</p>}
        </div>
      </div>
      <div className="p-4 flex justify-between items-center border-t border-[#613AE8]/30 bg-[#0B0014]/80">
        <StatusBadge>FLN.24</StatusBadge>
      </div>
    </motion.div>
  )
}

export default function PlayersShowcase() {
  const [activeRoster, setActiveRoster] = useState<RosterType>('fps')

  const rosters: Rosters = {
    fps: [
      { name: "DOPE", image: "/DOPE.webp" },
      { name: "VIRUS", image: "/VIRUS.webp" },
      { name: "WARLORD", image: "/WARLORD.webp" },
      { name: "LUIGI", image: "/LUIGI.webp" },
      { name: "ILLUSION", image: "/ILLUSION.webp" },
    ],
    moba: [
      { name: "DARKSCOPE", image: "https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/felines%2FDarkscope.webp?alt=media&token=c0921e3f-c42e-484e-85ff-5fc0161c255a" },
      { name: "HARSH", image: "https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/felines%2FScreenshot%202025-01-10%20at%2015-36-08%20Instagram.png?alt=media&token=032e4d3c-6351-484e-a54b-29330a075d64" },
      { name: "HALOGEN", image: "https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/felines%2FScreenshot%202025-01-10%20at%2015-37-19%20Instagram.png?alt=media&token=9472b166-14a8-4682-b8f3-ad3bc7493a40" },
      { name: "LEGIT", image: "https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/felines%2FScreenshot%202025-01-10%20at%2017-09-16%20Team%20Felines%20(%40teamfelines.in)%20%E2%80%A2%20Instagram%20photos%20and%20videos.png?alt=media&token=df8f0208-13ec-4c9e-84e3-7025bcffc708" },
      { name: "MAJOR", image: "https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/felines%2FScreenshot%202025-01-10%20at%2015-41-18%20Instagram.png?alt=media&token=14e7c408-f035-4adf-9ff0-a5d591b9bfed" },
      { name: "PEPE", image: "https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/felines%2FScreenshot%202025-01-10%20at%2015-39-47%20Instagram.png?alt=media&token=c2177a6d-bce7-42ff-84b2-35412fe10a88" },
      { name: "RIPPER", image: "https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/felines%2FScreenshot%202025-01-10%20at%2015-40-43%20Instagram.png?alt=media&token=ac517fe9-70cc-46f0-abf2-3733ddd8717b" },
      { name: "SOUMITROYT", image: "https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/felines%2FScreenshot%202025-01-10%20at%2015-38-01%20Instagram.png?alt=media&token=2e759c36-fc98-489c-9b5c-43922310e0be" },
      { name: "ULTRAEGO", image: "https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/felines%2FScreenshot%202025-01-10%20at%2015-34-57%20Instagram.png?alt=media&token=06a0fca9-b68e-456c-bcfa-4d6195d45302" },
    ],
  }

  return (
    <div className="bg-[#0B0014] text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" 
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16">
          <StatusBadge>GAME.ON</StatusBadge>
          <h1 className="text-4xl font-mono font-bold mt-4 mb-2">
            <span className="text-[#613AE8]">[FELINES]</span> ROSTER_
          </h1>
          <div className="flex items-center space-x-2 text-gray-400 font-mono">
            <span aria-hidden="true">&gt;</span>
            <span>SYSTEM.INITIALIZING_</span>
          </div>
        </div>

        <nav 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 font-mono" 
          aria-label="Roster categories"
        >
          {[
            { id: 'fps' as RosterType, label: 'CODM ROSTER' },
            { id: 'moba' as RosterType, label: 'CONTENT CREATORS' },
          ].map((roster) => (
            <button
              key={roster.id}
              onClick={() => setActiveRoster(roster.id)}
              className={`px-4 py-2 border transition-all ${
                activeRoster === roster.id 
                  ? 'border-[#613AE8] text-[#613AE8] bg-[#613AE8]/10' 
                  : 'border-gray-700 text-gray-400 hover:border-[#613AE8] hover:text-[#613AE8]'
              }`}
              aria-current={activeRoster === roster.id ? 'page' : undefined}
              aria-label={`View ${roster.label}`}
            >
              {roster.label}_
            </button>
          ))}
        </nav>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Player roster"
        >
          {rosters[activeRoster].map((player: Player, index: number) => (
            <PlayerCard key={index} {...player} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <StatusBadge>RECRUITMENT.ACTIVE</StatusBadge>
          <p className="mt-4 mb-6 font-mono text-gray-400">
            &gt; Seeking elite players to join our ranks_
          </p>
          <button 
            className="px-8 py-3 bg-[#0B0014] border border-[#613AE8] text-[#613AE8] font-mono group hover:bg-[#613AE8] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#613AE8] focus:ring-offset-2 focus:ring-offset-[#0B0014]"
            aria-label="Apply to join the team"
          >
            JOIN NOW_
            <ChevronRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}

