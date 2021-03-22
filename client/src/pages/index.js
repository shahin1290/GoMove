import React from 'react'
import Navbar from '../components/Navbar'
import Addressbar from '../components/Addressbar'
import Footer from '../components/Footer'
import TopSection from '../components/TopSection'
import ServiceCard from '../components/ServiceCard'
import QuoteSection from '../components/QuoteSection'
import ReviewsSection  from '../components/ReviewsSection'

const Home = () => {
  return (
    <>
      <Addressbar />
      <Navbar />
      <TopSection />
      <QuoteSection />
      <ServiceCard />
      <ReviewsSection />
      <Footer />
    </>
  )
}

export default Home
