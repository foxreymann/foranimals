import React from 'react'
import Ad from './Ad'
import Jumbo from './Jumbo'
import Payments from './Payments'
import Subscribe from './Subscribe'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Jumbo />
      <Payments />
      <Subscribe />
      <Ad />
      <Contact />
    </div>
  )
}

export default Home
