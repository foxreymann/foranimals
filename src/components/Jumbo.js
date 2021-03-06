import React, { Component } from 'react';
import logo from '../assets/logo-lg.png';
import JumboLink from './JumboLink';

const jumboLinks = [
  {
    icon: 'far fa-handshake',
    title: 'Adopcje',
    text: 'Wspomóż naszą fundację adoptując naszych podopiecznych.',
    link: '/adopt'
  },
  {
    icon: 'fas fa-stethoscope',
    title: 'Sterylizacje',
    text: 'Oferujemy możliwość sterylizacji każdego zwierzęcia.',
    link: '/sterilizations'
  },
  {
    icon: 'far fa-newspaper',
    title: 'Aktualności',
    text: 'Dowiedz się więcej o naszej Fundacji. Przeczytaj ważne informacje.',
    link: '/news'
  },
  {
    icon: 'far fa-hospital',
    title: 'Gabinet',
    text: 'Posiadamy własny gabinet zabiegowy oraz zespół weterynarzy.',
    link: '/clinic'
  }
]

class Jumbo extends Component {
  render() {
    return (
      <div>
        <header className="masthead pb-3">
          <div className="container">
            <div className="row">
              <div className="col-12 mx-auto text-center p-5">
                <img src={logo} className="Jumbo-logo" alt="logo"/>
              </div>
            </div>
          </div>
        </header>
        <div className="main">
          <div className="container">
            <div className="row pt-2 pb-3">
              {jumboLinks.map((link,i) => <JumboLink link={link} key={i}/>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbo;
