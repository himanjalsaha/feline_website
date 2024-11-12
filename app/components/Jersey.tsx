'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, RotateCcw } from 'lucide-react'
import Image from 'next/image'
import { TacticalElement } from './About'
import Gradient from './Gradient'
import Link from 'next/link'

const jersey = {
  name: 'Fall-Kit 2024-2025',
  frontImage: '/FelinesJerseyFront.png',
  backImage: '/FelinesJerseyBack1.png',
  description: 'Unleash the FELINE FRENZY with our Official Fall-Kit for the Season 2024-2025 by Six5Six. The design channels the fierce energy of Feline Power, while the sleek Gradient Waves vibe with our Bold Vision for the future of Esports.'
}

export default function FelineJerseyShowcase() {
  const [isBackView, setIsBackView] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#0B0014] text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(97, 58, 232, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(219, 39, 119, 0.4) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-0">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Felines <Gradient><span className=' font-asgard'>J</span>ersey</Gradient>
            </h2>
            <TacticalElement>SYS.APPAREL</TacticalElement>
          </div>
         <TacticalElement>GEAR.UP</TacticalElement>
        </div>

        {/* Main Content */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#0F1629] rounded-xl" />
          <div 
            className="absolute inset-0 opacity-50 rounded-xl"
            style={{
              background: `
                repeating-conic-gradient(
                  from 0deg at 50% 50%,
                  rgba(97, 58, 232, 0.1) 0deg 90deg,
                  transparent 90deg 180deg
                )
              `
            }}
          />
          
          <div className="relative p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Jersey Image */}
              <div className="relative group">
                <div className="absolute inset-0" />
                <motion.div
                  key={isBackView ? 'back' : 'front'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full aspect-[3/4]"
                >
                  <Image
                    src={isBackView ? jersey.backImage : jersey.frontImage}
                    alt={`${jersey.name} - ${isBackView ? 'Back' : 'Front'} View`}
                    fill
                    className="object-cover rounded-xl"
                    priority={true}

                  />
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0F1629] to-transparent" />
                <button
                  onClick={() => setIsBackView(!isBackView)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-[#613AE8]/20 rounded-full hover:bg-[#613AE8]/40 transition-colors"
                  aria-label={isBackView ? "Show front view" : "Show back view"}
                >
                  <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>

              {/* Jersey Details */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-2xl  sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-[#613AE8] to-[#DB2777] text-transparent bg-clip-text">
                    {jersey.name}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
                    {jersey.description}
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs sm:text-sm text-[#613AE8] font-mono">AVAILABLE SIZES</span>
                    <div className="h-px flex-grow bg-[#613AE8]/20" />
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <div
                        key={size}
                        className="text-xs sm:text-sm text-gray-300 px-2 sm:px-3 py-1 border border-[#613AE8]/20 rounded"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-xs sm:text-sm text-[#613AE8] font-mono">FEATURES</span>
                    <div className="h-px flex-grow bg-[#613AE8]/20" />
                  </div>
                  <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
                    <li className='flex gap-2  items-center'>Designed by Six5Six <Link className=' text-blue-500'  href='https://www.instagram.com/six5sixsport/'>(@six5sixsport)</Link> <Image src='/six.png' alt='six5six' width={50} height={50}/></li>
                    <li>Sleek Gradient Waves design</li>
                    <li>Moisture-wicking fabric</li>
                    <li>Breathable mesh panels</li>
                    <li>Ergonomic fit for maximum comfort</li>
                  </ul>
                </div>

                <a
                  href="#order-form"
                  className="group relative block w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#613AE8] to-[#DB2777] rounded transform transition-transform group-hover:scale-105" />
                  <div className="relative bg-[#0F1629] rounded m-[1px] p-3 sm:p-4 transition-transform group-hover:bg-transparent">
                    <span className="flex items-center justify-center text-white text-sm sm:text-base font-medium">
                      Order now <ExternalLink className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-block text-xs text-[#613AE8] font-mono border border-[#613AE8]/20 px-2 py-1 rounded-sm mb-4">
            SQUAD.IDENTITY
          </div>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Our Fall-Kit is more than just apparel – it's a statement of belonging to the Feline pride. 
            Stay tuned for further updates on availability. #ForcaFelines #Six5Six #TeamFelines #FelineFrenzy #TheWaveOfPower
          </p>
        </div>
      </div>
    </div>
  )
}