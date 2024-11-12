'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

import useWindowSize from "../hooks/useWindow"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [time, setTime] = useState("00:00")
  const { width }  = useWindowSize(); 
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const heroImage = width <= 768  ?  "/heromobile.jpg" : "/HERO.jpg"



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
    <div className="relative bg-black min-h-screen overflow-hidden">
      <Image
  key={heroImage} // This forces a re-render on source change
  src={heroImage}
  alt="Background"
  fill
  style={{ objectFit: "cover", objectPosition: "center" }}
  priority
  className={`z-0 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={() => setIsImageLoaded(true)}
/>


<div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 w-[800px] h-[800px] rounded-full bg-purple-900/20 blur-[120px] animate-pulse" />
        <div className="absolute -right-1/4 bottom-1/4 w-[600px] h-[600px] rounded-full bg-indigo-900/20 blur-[100px] animate-pulse delay-1000" />
      </div>


      {/* Navigation */}
      {/* <nav className="relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-xl flex justify-start items-center font-bold text-white tracking-wider">
                フェリン // FELINE
                <Image src="/logo.png" alt="logo" width={100} height={100} className="size-14 p-2"/>
              </Link>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm text-purple-300 font-mono"
              >
                {time} <span className="text-[#613AE8]">EST</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href="/join"
                  className="bg-transparent border border-[#613AE8] px-4 py-1.5 text-sm text-purple-300 hover:bg-[#613AE8]/10 transition-colors"
                >
                  Join Force
                </Link>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </nav> */}

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-32">
        <div className="max-w-[90%] mx-auto">
          {/* Micro Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 flex items-center justify-between text-xs font-mono"
          >
            <div className="text-[#613AE8]">フェリンカフェリンカ</div>
            <div className="text-[#613AE8]">VERSION 2.0</div>
          </motion.div>

          {/* Main Title */}
          <div className="relative space-y-4 text-center mb-12">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "6rem" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-4 left-[47.1%] md:left-[47.9%]  lg:left-[48.8%]  -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#613AE8] to-transparent"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              WE ARE
              <br />
              <span className="relative inline-block">
                T<span className="font-asgard">E</span>AM{" "}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#613AE8] to-[#DC2626] text-transparent bg-clip-text">FELINES</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-[#2563EB] via-[#613AE8] to-[#DC2626]"
                />
              </span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <p className="text-white text-lg">
              Join the pack and embark on the epic journey to the pinnacle. Keep cheering for us as we steal the spotlight!
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/join"
              className="group relative px-8 py-3 bg-[#613AE8]/10 border border-[#613AE8] hover:bg-[#613AE8]/20 transition-colors"
            >
              <span className="relative z-10 text-purple-300 font-medium">JOIN FORCE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-[#613AE8]/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <div className="text-[#613AE8] font-mono text-sm">#FORCAFELINES</div>
          </motion.div>

          {/* Bottom Micro UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="absolute bottom-8 left-4 right-4 flex justify-between text-xs font-mono text-[#613AE8]"
          >
            <div>SYS.64.4</div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-1 bg-[#613AE8] rounded-full"
              />
              <span>SQUAD ACTIVE</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
        >
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
        </motion.div>
      )}
    </div>
  )
}