import React from 'react'
import Navbar from '../components/Navbar'
import Addressbar from '../components/Addressbar'
import Footer from '../components/Footer'
import FeatureSection from '../components/FeatureSection'
import ServicesSection from '../components/ServicesSection'
import QuoteSection from '../components/QuoteSection'
import ReviewsSection from '../components/ReviewsSection'
import ProcessSection from '../components/ProcessSection'
import FaqSection from '../components/FaqSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <>
      <Addressbar />
      <Navbar />
      <FeatureSection />
      <QuoteSection />
      <ServicesSection />
      <ReviewsSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
