import React from 'react';
import { Link } from 'react-router-dom';
import payu from '../payu.svg'
import PayU from './PayU'

const Payments = () =>
  <section class="bg-primary text-center">
    <div class="container">
      <h2>Szybka pomoc</h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="row">
            <i className="fab fa-cc-paypal fa-3x" />
          </div>
          <div class="row">
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_s-xclick" />
						<input type="hidden" name="hosted_button_id" value="ER2HYC6HSTJWY" />
						<input type="image" src="https://www.paypalobjects.com/pl_PL/PL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – Płać wygodnie i bezpiecznie" />
						<img alt="" border="0" src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif" width="1" height="1" />
						</form>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <img src={payu} className="img-fluid mx-auto my-auto" alt=""/>
          </div>
          <div className="row">
						<PayU />
          </div>
        </div>
      </div>
    </div>
  </section>

export default Payments
