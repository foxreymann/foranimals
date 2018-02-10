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
    title: 'Aktualności',
    text: 'Dowiedz się więcej o naszej Fundacji. Przeczytaj ważne informacje.',
    link: '/aktualnosci'
  },
  {
    icon: 'far fa-hospital',
    title: 'Gabinet',
    text: 'Posiadamy własny gabinet zabiegowy oraz zespół weterynarzy.',
    link: '/gabinet'
  }
]

class Jumbo extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="row">
            <div class="col-12 d-flex justify-content-center mx-auto my-auto">
              <img src={logo} className="Jumbo-logo m-3" alt="logo image"/>
            </div>
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
