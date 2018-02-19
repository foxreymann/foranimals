import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo-lg.png';
import JumboLink from './JumboLink'

class Jumbo extends Component {
  render() {
    return (
      <div>
        <header className="masthead pb-3">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 mt-5">
                <div className="row">
                  <Link to='/adopt' className="col-md-12 btn btn-outline btn-xl js-scroll-trigger Jumbo-link p-3" style={{height: '150px'}}>
                    <i className={`far fa-handshake fa-3x`} />
                    <h3>Adopcje</h3>
                    <div>Wspomóż naszą fundację adoptując naszych podopiecznych.</div>
                  </Link>
                  <Link to='/sterilizations' className="col-md-12 btn btn-outline btn-xl js-scroll-trigger Jumbo-link p-3" style={{height: '150px'}}>
                    <i className={`fas fa-stethoscope`} />
                    <h3>Sterylizacj</h3>
                    <div>Oferujemy możliwość sterylizacji każdego zwierzęcia</div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 mx-auto text-center p-5">
                <img src={logo} className="Jumbo-logo" alt="logo image"/>
              </div>
              <div className="col-12 col-md-4 mt-5">
                <div className="row">
                  <Link to='/news' className="col-md-12 btn btn-outline btn-xl js-scroll-trigger Jumbo-link p-3" style={{height: '150px'}}>
                    <i className={`far fa-newspaper`} />
                    <h3>Aktualności</h3>
                    <div>Dowiedz się więcej o naszej Fundacji. Przeczytaj ważne informacje.</div>
                  </Link>
                  <Link to='/clinic' className="col-md-12 btn btn-outline btn-xl js-scroll-trigger Jumbo-link p-3" style={{height: '150px'}}>
                    <i className={`far fa-hospital`} />
                    <h3>Gabinet</h3>
                    <div>Posiadamy własny gabinet zabiegowy oraz zespół weterynarzy.</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Jumbo;
