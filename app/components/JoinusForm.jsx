'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ChevronRight, Send, User, Mail, Gamepad, Code, MessageSquare, Zap } from 'lucide-react'
import Gradient from './Gradient'

const InputField = ({ icon: Icon, type, placeholder, value, onChange, name }) => (
  <div className="relative group">
    <input
      type={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      name={name}
      className="w-full bg-[#1A1A2E] border border-[#613AE8]/20 px-4 py-2 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#613AE8] transition-colors duration-300"
    />
    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#613AE8] h-5 w-5" />
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <span className="text-[#613AE8] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name.toUpperCase()}_
      </span>
    </div>
  </div>
)

const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

const GlitchText = ({ children }) => (
  <span className="relative inline-block">
    <span className="absolute top-0 left-0 -ml-1 text-[#FF00FF] opacity-70 animate-pulse">
      {children}
    </span>
    <span className="absolute top-0 left-0 -ml-1 text-[#00FFFF] opacity-70 animate-pulse" style={{ animationDelay: '0.05s' }}>
      {children}
    </span>
    <span className="relative">{children}</span>
  </span>
)

export default function EnhancedJoinUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gamertag: '',
    role: '',
    message: ''
  })
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const { name, email, gamertag, role, message } = formData;
    const subject = encodeURIComponent(`Recruitment Application: ${name}`);
    const body = encodeURIComponent(`
      Name: ${name}
      Email: ${email}
      Gamertag: ${gamertag}
      Role/Position: ${role}
  
      Message:
      ${message}
    `);
  
    const mailtoLink = `mailto:recruit@yourteam.com?subject=${subject}&body=${body}`;
  
    window.location.href = mailtoLink; // This will open the email client
  };

  return (
    <div className="bg-[#0B0014] text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-5" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#613AE8] rounded-full blur-[150px] -z-10 opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[150px] -z-10 opacity-10 animate-pulse" />
      
      <div className="max-w-4xl mx-auto relative">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#613AE8] mb-2 block">THE ELITE RECRUITMENT NETWORK</span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              <Gradient><GlitchText>JOIN THE ELITE TEAM</GlitchText></Gradient>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to make your mark in esports? We're recruiting top-tier players to join our competitive team.
              Whether you're a strategic mastermind or a high-skill player, we want you to be part of our winning squad.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                icon={User}
                type="text"
                
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
              <InputField
                icon={Mail}
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
              <InputField
                icon={Gamepad}
                type="text"
                placeholder="Gamer Tag"
                value={formData.gamertag}
                onChange={handleChange}
                name="gamertag"
              />
              <InputField
                icon={Code}
                type="text"
                placeholder="Role/Position"
                value={formData.role}
                onChange={handleChange}
                name="role"
              />
            </div>
            <div className="relative group">
              <textarea
                placeholder="Share your experience, motivation, and why you want to join the team"
                value={formData.message}
                onChange={handleChange}
                name="message"
                rows={4}
                className="w-full bg-[#1A1A2E] border border-[#613AE8]/20 px-4 py-2 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#613AE8] transition-colors duration-300"
              />
              <MessageSquare className="absolute left-3 top-3 text-[#613AE8] h-5 w-5" />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-start mt-3 pointer-events-none">
                <span className="text-[#613AE8] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  MESSAGE_
                </span>
              </div>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-[#613AE8] text-white px-6 py-3 rounded-sm hover:bg-[#4E2EB8] transition-colors duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Submit Application</span>
              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#613AE8] to-[#4E2EB8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">
              <GlitchText>Connect with Us</GlitchText>
            </h2>
            <p className="text-gray-400 mb-6">
              Stay connected with the team through our social platforms for real-time updates and exclusive content.
            </p>
            <div className="flex justify-center space-x-6">
              {['Discord', 'Twitch', 'YouTube', 'Twitter'].map((platform) => (
                <motion.a
                  key={platform}
                  href={`#${platform.toLowerCase()}`}
                  className="text-[#613AE8] hover:text-white transition-colors duration-300 relative group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {platform}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#613AE8] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="mt-16 text-center">
            <a
              href="/players"
              className="inline-flex items-center text-[#613AE8] hover:text-white transition-colors duration-300 group"
            >
              <span>View Current Team Roster</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </AnimatedSection>

        <div className="fixed bottom-4 left-4 text-xs font-mono text-[#613AE8]">
          <div>SYS_TIME: {currentTime}</div>
          <div>STATUS: RECRUITING_ACTIVE</div>
        </div>

        <div className="fixed top-4 right-4 text-xs font-mono text-[#613AE8] flex items-center">
          <Zap className="h-4 w-4 mr-2 animate-pulse" />
          <span>NETWORK_STABLE</span>
        </div>
      </div>
    </div>
  )
}
