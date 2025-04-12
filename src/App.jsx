import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Top_Section from './components/header/Top_Section'
import Navbar from './components/header/Navbar'
import HeroSection from './components/main/HeroSection'
import Banner from './components/main/Banner'
import PromoHighlight from './components/main/PromoHighlight'
import Tabs from './components/main/Tabs'
import Testimonials from './components/main/Testimonials'
import FooterBanner from './components/footer/FooterBanner'
import Footer from './components/footer/Footer'
import Bottom_Section from './components/footer/Bottom_Section'
import FloatingButtons from './components/FloatingButtons'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Top_Section />
        <Navbar />
        <HeroSection />
        <Banner />
        <PromoHighlight />
        <Tabs />
        <Testimonials />
        <FooterBanner />
        <Footer />
        <Bottom_Section />
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App
