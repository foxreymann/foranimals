import React from 'react';

export default () =>
  <section className="contact text-center">
    <div className="container p-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h2 className="pb-3">Dane Fundacji:</h2>
          <ul className="list-unstyled">
            <li>Adres:</li>
            <li>Fundacja For Animals</li>
            <li>ul. 11 Listopada 4</li>
            <li>40-384 Katowice</li>
            <li>KRS: 0000265307</li>
          </ul>
          <ul className="list-unstyled">
            <li>Konto bankowe:</li>
            <li>Bank PKO BP, konto nr:</li>
            <li>02 1020 2313 0000 3102 0161 2043</li>
          </ul>
          <ul className="list-unstyled">
            <li><a href='./regulamin.pdf' target="_blank" rel="noopener">REGULAMIN DAROWIZN</a></li>
          </ul>
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
            <li>web: <a href="http://www.foranimals-lodz.pl" target="_blank" rel="noopener">http://www.foranimals-lodz.pl</a></li>
          </ul>

          <h3>Grudziądz:</h3>
          <ul className="list-unstyled">
            <li>e-mail: <a href="mailto:koty.grudziadz@poczta.onet.pl" target="_top">koty.grudziadz@poczta.onet.pl</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
