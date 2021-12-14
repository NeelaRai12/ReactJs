import React from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Trending from '../components/Trending'

const Homepage = () => {
    return (
        <>
          <Navbar/>  
          <Carousel/>
          <Card/>
          <Trending/>
          <Footer/>
        </>
    )
}

export default Homepage
