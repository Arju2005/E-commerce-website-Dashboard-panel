import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationHover from './LocationHover'
import AboutUs from './AboutUs'
import Appsection from './Appsection'
import Sponser from './Sponser'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <LocationHover/>
      <AboutUs/>
      <Appsection/>
      <Sponser/>
    </div>
  )
}

export default Home