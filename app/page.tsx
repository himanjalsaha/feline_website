import React from 'react'
import Hero from './components/Hero'
import AboutFeline from './components/About'
import LiveSchedule from './components/LiveSchedule'
import FelineJerseys from './components/Jersey'
import FelineAchievements from './components/Achievements'
import Navbar from './components/navbar'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutFeline/>
      <FelineAchievements/>
      <FelineJerseys/>
    
      <LiveSchedule/>
    </div>
  )
}

export default page