import React, { Component } from 'react';
import logo from '../logo.png';

class Jumbo extends Component {
  render() {
    return (
      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-lg-5 mx-auto my-auto">
              <img src={logo} class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-7 my-auto">
              <div class="header-content mx-auto">
                tu bedą 4 linki
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Jumbo;
