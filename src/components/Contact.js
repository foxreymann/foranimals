import React, { Component } from 'react';
import regulamin from '../assets/regulamin.pdf'

class Contact extends Component {
  render() {
    return (
      <section className="contact text-center">
        <div className="container p-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="pb-3">Dane Fundacji:</h2>
              <h3>Adres:</h3>
              <ul className="list-unstyled">
                <li>Fundacja For Animals</li>
                <li>ul. 11 Listopada 4</li>
                <li>40-384 Katowice</li>
                <li>KRS: 0000265307</li>
              </ul>
              <h3>Konto bankowe:</h3>
              <ul className="list-unstyled">
                <li>Bank PKO BP, konto nr:</li>
                <li>02 1020 2313 0000 3102 0161 2043</li>
              </ul>
              <a href={regulamin} target="_blank">REGULAMIN DAROWIZN</a>
            </div>
            <div className="col-12 col-md-6">
              <h2 className="pb-3">Ważne kontakty:</h2>

              <h3>Katowice:</h3>
              <ul className="list-unstyled">
                <li>e-mail: <a href="mailto:pini1@foranimals.org.pl" target="_top">pini1@foranimals.org.pl</a></li>
                <li>tel.: 668-400-510</li>
              </ul>

              <h3>Łódź:</h3>
              <ul className="list-unstyled">
                <li>Anna (‘ansk’): </li>
                <li>e-mail: <a href="mailto:ansk@foranimals.org.pl">ansk@foranimals.org.pl</a></li>
                <li>web: <a href="http://www.foranimals-lodz.pl" target="_blank" rel="noopener noreferrer">http://www.foranimals-lodz.pl</a></li>
              </ul>

              <h3>Grudziądz:</h3>
              <ul className="list-unstyled">
                <li>e-mail: <a href="mailto:koty.grudziadz@poczta.onet.pl" target="_top">koty.grudziadz@poczta.onet.pl</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
