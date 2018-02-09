import React from 'react';
import { Link } from 'react-router-dom';

const Payments = () =>
  <section class="bg-primary text-center">
    <div class="container">
      <h2>Szybka pomoc</h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="row">
            <i className="fab fa-cc-paypal fa-3x" />
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="ER2HYC6HSTJWY" />
<input type="image" src="https://www.paypalobjects.com/pl_PL/PL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – Płać wygodnie i bezpiecznie" />
<img alt="" border="0" src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif" width="1" height="1" />
</form>
          </div>
        </div>
        <div className="col-12 col-md-6">
payu
        </div>
        {/*
        <div class="col-md-8 mx-auto">
          <h2 class="section-heading">Discover what all the buzz is about!</h2>
          <p>Our app is available on any mobile device! Download now to get started!</p>
          <div class="badges">
            <a class="badge-link" href="#"><img src="img/google-play-badge.svg" alt=""/></a>
            <a class="badge-link" href="#"><img src="img/app-store-badge.svg" alt=""/></a>
          </div>
        </div>
        */}
      </div>
    </div>
  </section>

export default Payments
