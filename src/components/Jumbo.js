import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.png';
import JumboLink from './JumboLink'

const jumboLinks = [
  {
    icon: 'fa-handshake',
    title: 'Adopcje',
    text: 'Wspomóż naszą fundację adoptując naszych podopiecznych.',
    link: '/adopcje'
  },
  {
    icon: 'fa-handshake',
    title: 'Adropcje',
    text: 'Wspomóż naszą fundację adoptując naszych podopiecznych.',
    link: '/adopcje'
  },
  {
    icon: 'fa-handshake',
    title: 'Adropcje',
    text: 'Wspomóż naszą fundację adoptując naszych podopiecznych.',
    link: '/adopcje'
  },
  {
    icon: 'fa-handshake',
    title: 'Adropcje',
    text: 'Wspomóż naszą fundację adoptując naszych podopiecznych.',
    link: '/adopcje'
  }
]

class Jumbo extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-5 mx-auto my-auto">
              <img src={logo} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-7 my-auto">
              <div className="header-content mx-auto">
                <div className="row">
                  {jumboLinks.map(link => <JumboLink link={link} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Jumbo;
