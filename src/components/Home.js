import React from 'react'
import { Link } from 'react-router-dom'
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
      <Contact />
    </div>
  )
}

export default Home
