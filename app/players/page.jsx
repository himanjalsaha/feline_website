'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Twitter, Twitch, ChevronRight } from 'lucide-react'

const StatusBadge = ({ children }) => (
  <div className="inline-flex items-center space-x-2 font-mono text-xs">
    <span className="text-[#613AE8]">&gt;</span>
    <span className="text-[#613AE8] border border-[#613AE8]/20 px-3 py-1.5">
      {children}_
    </span>
  </div>
)

const PlayerCard = ({ name, role, image, twitter, twitch }) => (
  <motion.div 
    className="bg-[#0B0014] rounded-none border border-[#613AE8]/30 group"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative aspect-square  overflow-hidden">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#613AE8] z-10" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#613AE8] z-10" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#613AE8] z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#613AE8] z-10" />
      <img src={image} alt={name} className="w-full h-full object-cover object-center  scale-100 transition-transform duration-300 group-hover:scale-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0014] via-[#0B0014]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <StatusBadge>PLAYER.PROFILE</StatusBadge>
        <h3 className="text-xl font-mono font-bold mt-2 mb-1">[{name}]</h3>
        <p className="text-sm text-gray-400 font-mono">&gt; {role}_</p>
      </div>
    </div>
    <div className="p-4 flex justify-between items-center border-t border-[#613AE8]/30 bg-[#0B0014]/80">
      {/* <div className="flex space-x-3">
        <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#613AE8] transition-colors">
          <Twitter className="w-5 h-5" />
          <span className="sr-only">Twitter profile of {name}</span>
        </a>
        <a href={twitch} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#613AE8] transition-colors">
          <Twitch className="w-5 h-5" />
          <span className="sr-only">Twitch channel of {name}</span>
        </a>
      </div> */}
      <StatusBadge>FLN.24</StatusBadge>
    </div>
  </motion.div>
)

export default function PlayersShowcase() {
  const [activeRoster, setActiveRoster] = useState('fps')

  const rosters = {
    fps: [
      { name: "DOPE",  image: "/DOPE.webp", twitter: "https://twitter.com/nightstalker", twitch: "https://twitch.tv/nightstalker" },
      { name: "VIRUS",  image: "/VIRUS.webp", twitter: "https://twitter.com/pixelmartinez", twitch: "https://twitch.tv/pixelmartinez" },
      { name: "WARLORD",  image: "/WARLORD.webp", twitter: "https://twitter.com/blazethompson", twitch: "https://twitch.tv/blazethompson" },
      { name: "LUIGI",  image: "/LUIGI.webp", twitter: "https://twitter.com/ghostwilson", twitch: "https://twitch.tv/ghostwilson" },
      { name: "ILLUSION",  image: "/ILLUSION.webp", twitter: "https://twitter.com/ghostwilson", twitch: "https://twitch.tv/ghostwilson" },

    ],
    moba: [
      { name: "DARKSCOPE", image: "/DARKSCOPE.webp", twitter: "https://twitter.com/vortexkim", twitch: "https://twitch.tv/vortexkim" },
      { name: "HARSH" , image: "/HARSH.PNG", twitter: "https://twitter.com/titanpatel", twitch: "https://twitch.tv/titanpatel" },
      { name: "HALOGEN",  image: "/HALOGEN.PNG", twitter: "https://twitter.com/sirennovak", twitch: "https://twitch.tv/sirennovak" },
      { name: "LEGIT",  image: "/LEGIT.JPG", twitter: "https://twitter.com/jungleking", twitch: "https://twitch.tv/jungleking" },
      { name: "MAJOR",  image: "/MAJOR.PNG", twitter: "https://twitter.com/jungleking", twitch: "https://twitch.tv/jungleking" },
      { name: "PEPE",  image: "/PEPE.PNG", twitter: "https://twitter.com/jungleking", twitch: "https://twitch.tv/jungleking" },
      { name: "RIPPER",  image: "/RIPPER.PNG", twitter: "https://twitter.com/jungleking", twitch: "https://twitch.tv/jungleking" },
      { name: "SOUMITROYT",  image: "/SOUMITROYT.PNG", twitter: "https://twitter.com/jungleking", twitch: "https://twitch.tv/jungleking" },
      { name: "ULTRAEGO",  image: "/ULTRAEGO.PNG", twitter: "https://twitter.com/jungleking", twitch: "https://twitch.tv/jungleking" },



    ],
    fighting: [
      { name: "Blitz.Johnson", role: "Team Captain", image: "/placeholder.svg?height=400&width=400", twitter: "https://twitter.com/blitzjohnson", twitch: "https://twitch.tv/blitzjohnson" },
      { name: "Swift.Tanaka", role: "Combo Specialist", image: "/placeholder.svg?height=400&width=400", twitter: "https://twitter.com/swifttanaka", twitch: "https://twitch.tv/swifttanaka" },
      { name: "Crusher.Campbell", role: "Grappler", image: "/placeholder.svg?height=400&width=400", twitter: "https://twitter.com/crushercampbell", twitch: "https://twitch.tv/crushercampbell" },
    ],
  }

  const stats = [
    { label: 'Matches Won', value: '300+', subtitle: 'Incredible wins across tournaments' },
    { label: 'Team Strength', value: '150+', subtitle: 'Talented players and staff' },
    { label: 'Events Participated', value: '50+', subtitle: 'Global events and leagues' },
  ]

  return (
    <div className="bg-[#0B0014] text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16">
          <StatusBadge>GAME.ON</StatusBadge>
          <h1 className="text-4xl font-mono font-bold mt-4 mb-2">
            <span className="text-[#613AE8]">[FELINES]</span> ROSTER_
          </h1>
          <div className="flex items-center space-x-2 text-gray-400 font-mono">
            <span>&gt;</span>
            <span>SYSTEM.INITIALIZING_</span>
          </div>
        </div>
{/* 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0B0014] p-6 border border-[#613AE8]/30">
              <h3 className="font-mono text-gray-400 mb-2">{stat.label}_</h3>
              <div className="text-4xl font-mono font-bold text-[#613AE8] mb-2">{stat.value}</div>
              <p className="text-sm text-gray-400 font-mono">{stat.subtitle}</p>
            </div>
          ))}
        </div> */}

<nav className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 font-mono" aria-label="Roster selection">
  {[
    { id: 'fps', label: 'CODM ROSTER' },
    { id: 'moba', label: 'CONTENT CREATORS' },
    
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
    >
      {roster.label}_
    </button>
  ))}
</nav>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rosters[activeRoster].map((player, index) => (
            <PlayerCard key={index} {...player} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <StatusBadge>RECRUITMENT.ACTIVE</StatusBadge>
          <p className="mt-4 mb-6 font-mono text-gray-400">
            &gt; Seeking elite players to join our ranks_
          </p>
          <button className="px-8 py-3 bg-[#0B0014] border border-[#613AE8] text-[#613AE8] font-mono group hover:bg-[#613AE8] hover:text-white transition-all">
            JOIN NOW_
            <ChevronRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  )
}