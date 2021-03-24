import React from 'react'
import Navbar from '../components/Navbar'
import Addressbar from '../components/Addressbar'
import Footer from '../components/Footer'
import FeatureSection from '../components/FeatureSection'
import ServiceCard from '../components/ServiceCard'
import QuoteSection from '../components/QuoteSection'
import ReviewsSection from '../components/ReviewsSection'
import ProcessSection from '../components/ProcessSection'
import FaqSection from '../components/FaqSection'

const Home = () => {
  return (
    <>
      <Addressbar />
      <Navbar />
      <FeatureSection />
      <QuoteSection />
      <ServiceCard />
      <ReviewsSection />
      <ProcessSection />
      <FaqSection />
      <Footer />
    </>
  )
}

export default Home
