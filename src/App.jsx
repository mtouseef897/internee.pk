import React from 'react'
import { images } from './utilities'
import { AboutSection, Footer, HeroSection, Navbar, PopularSection, ReviewSection, WhyUsSection } from './containers'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <PopularSection/>
      <WhyUsSection/>
      <ReviewSection/>
      <Footer/>
    </div>
  )
}

export default App