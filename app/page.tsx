import React from 'react'
import Hero from './components/Hero'
import AboutFeline from './components/About'
import LiveSchedule from './components/LiveSchedule'

const page = () => {
  return (
    <div>
      <Hero/>
      <AboutFeline/>
      <LiveSchedule/>
    </div>
  )
}

export default page