import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.png';
import JumboLink from './JumboLink'

const jumboLinks = [
  {
    icon: 'far fa-handshake',
    title: 'Adopcje',
    text: 'Wspomóż naszą fundację adoptując naszych podopiecznych.',
    link: '/adopcje'
  },
  {
    icon: 'fas fa-stethoscope',
    title: 'Sterylizacje',
    text: 'Oferujemy możliwość sterylizacji każdego zwierzęcia.',
    link: '/sterylizacje'
  },
  {
    icon: 'far fa-newspaper',
    title: 'Adropcje',
    text: 'Wspomóż naszą fundację adoptując naszych podopiecznych.',
    link: '/adopcje'
  },
  {
    icon: 'far fa-hospital',
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
          <div className="row">
            <img src={logo} className="Jumbo-logo img-fluid mx-auto my-auto" alt=""/>
          </div>
          <div className="row">
            {jumboLinks.map(link => <JumboLink link={link} />)}
          </div>
        </div>
      </header>
    )
  }
}

export default Jumbo;
