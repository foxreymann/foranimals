import React from 'react'
import { NavLink } from 'react-router-dom'
import { Collapse, Navbar } from 'reactstrap';
import * as Scroll from 'react-scroll';

const scroll = Scroll.animateScroll;
const options = { duration: 0 }

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.collapseNavbar = this.collapseNavbar.bind(this);

    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
    scroll.scrollToTop(options);
  }

  collapseNavbar() {
    this.setState({
      collapsed: true
    });
    scroll.scrollToTop(options);
  }

  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
      <button onClick={this.toggleNavbar} expanded="true" className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu&nbsp;
        <i className="fa fa-bars"></i>
      </button>
      <Collapse isOpen={!this.state.collapsed} navbar>
        <Navbar className="collapse navbar-collapse js-scroll-trigger" id="navbarResponsive">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                exact to='/'
                className='Header-navLink'
                activeClassName='Header-isActive'
                onClick={this.collapseNavbar}
              >
                Strona Główna
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to='/adopt'
                className='Header-navLink'
                activeClassName='Header-isActive'
                onClick={this.collapseNavbar}
              >
                Adopcje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to='/residents'
                className='Header-navLink'
                activeClassName='Header-isActive'
                onClick={this.collapseNavbar}
              >
                Rezydenci
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to='/news'
                className='Header-navLink'
                activeClassName='Header-isActive'
                onClick={this.collapseNavbar}
              >
                Aktualności
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to='/about'
                className='Header-navLink'
                activeClassName='Header-isActive'
                onClick={this.collapseNavbar}
              >
                O Nas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to='/clinic'
                className='Header-navLink'
                activeClassName='Header-isActive'
                onClick={this.collapseNavbar}
              >
                Gabinet
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to='/sterilizations'
                className='Header-navLink'
                activeClassName='Header-isActive'
                onClick={this.collapseNavbar}
              >
                Sterylizacje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to='/how-to-help'
                className='Header-navLink'
                activeClassName='Header-isActive'
                onClick={this.collapseNavbar}
              >
                Jak Pomóc?
              </NavLink>
            </li>
          </ul>
        </Navbar>
      </Collapse>
      <a href="https://www.facebook.com/Fundacja-For-Animals-202065053142451/" target="_blank" rel="noopener noreferrer" id="facebook-button">
        <i className='fab fa-facebook fa-2x' />
      </a>
    </nav>
    )
  }
}
