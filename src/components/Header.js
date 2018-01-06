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
  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
      <div className="container">
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
                >
                  Strona Główna
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact to='/news'
                  className='Header-navLink'
                  activeClassName='Header-isActive'
                >
                  Aktualności
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to='/about'
                  className='Header-navLink'
                  activeClassName='Header-isActive'
                >
                  About
                </NavLink>
              </li>
            </ul>
          </Navbar>
        </Collapse>
      </div>
    </nav>
    )
  }
}
