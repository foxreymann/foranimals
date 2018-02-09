import React from 'react'
import { Link } from 'react-router-dom'
import Jumbo from './Jumbo'
import Payments from './Payments'
import Subscribe from './Subscribe'

const Home = () => {
  return (
    <div>
      <Jumbo />
      <Payments />
      <Subscribe />
    </div>
  )
}

export default Home
