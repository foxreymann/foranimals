import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse js-scroll-trigger" id="navbarResponsive">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NavLink
                exact to='/'
                className='Header-navLink'
                activeClassName='Header-isActive'
              >
                Strona Główna
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                exact to='/news'
                className='Header-navLink'
                activeClassName='Header-isActive'
              >
                Aktualności
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to='/about'
                className='Header-navLink'
                activeClassName='Header-isActive'
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)
