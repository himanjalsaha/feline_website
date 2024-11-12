'use client'

import React from 'react'

import Hero from './components/Hero'
import AboutFeline from './components/About'
import LiveSchedule from './components/LiveSchedule'
import FelineJerseys from './components/Jersey'
import FelineAchievements from './components/Achievements'

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
    
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutFeline />
      </section>
      <section id="achievements">
        <FelineAchievements />
      </section>
      <section id="jerseys">
        <FelineJerseys />
      </section>
      {/* <section id="schedule">
        <LiveSchedule />
      </section> */}
    </div>
  )
}

export default Page