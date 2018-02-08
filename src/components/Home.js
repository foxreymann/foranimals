import React from 'react'
import { Link } from 'react-router-dom'
import Jumbo from './Jumbo'
import Payments from './Payments'

const Home = () => {
  return (
    <div>
      <Jumbo />
      <Payments />
    </div>
  )
}

export default Home
