import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import News from './News'
import About from './About'
import Post from './Post'
import Footer from './Footer'
import Sterilizations from './Sterilizations'
import Clinic from './Clinic'

const App = () => (
  <Router>
    <div>
      <Header />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/news' component={News} />
        <Route path='/sterilizations' component={Sterilizations} />
        <Route path='/clinic' component={Clinic} />
        <Route path='/post/:slug' component={Post} />
      <Footer />
    </div>
  </Router>
)

export default App
