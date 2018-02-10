import React from 'react'
import { NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink as StrapNavLink} from 'reactstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  collapseNavbar() {
    this.setState({
      collapsed: true
    });
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
                exact to='/office'
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
                Sterylizajce
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
            <li className="nav-item">
              <NavLink
                to='/contact'
                className='Header-navLink'
                activeClassName='Header-isActive'
                onClick={this.collapseNavbar}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </Navbar>
      </Collapse>
    </nav>
    )
  }
}
