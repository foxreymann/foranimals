import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.png';

const jumboLinks = [
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
                  {jumboLinks.map(link => (
                    <div className="col-12 col-md-6">
                      <Link to={link.link} className="Jumbo-link rounded border-primary ">.col-12 .col-md-8</Link>
                    </div>
                  ))}
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
