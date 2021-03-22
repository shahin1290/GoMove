import React from 'react'
import Navbar from '../components/Navbar'
import Addressbar from '../components/Addressbar'
import Footer from '../components/Footer'
import TopSection from '../components/TopSection'

const Home = () => {
  return (
    <>
      <Addressbar />
      <Navbar />
      <TopSection />
      <Footer />
    </>
  )
}

export default Home
