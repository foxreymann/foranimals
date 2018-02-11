import React from 'react';
import { Link } from 'react-router-dom';
import PayU from './PayU'

const Payments = () =>
  <section class="bg-primary text-center">
    <div class="container p-5">
      <h2 class="pb-5">Szybka pomoc</h2>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div class="paypal-wrap">
            <div class="d-flex justify-content-center">
              <i className="fab fa-cc-paypal fa-3x" />
            </div>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="ER2HYC6HSTJWY" />

              <button type="submit" formtarget="_blank" class="btn btn-primary btn-xl btn-donate m-3">
                Przekaż darowiznę z PayPal
              </button>
              <img alt="" border="0" src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif" />
            </form>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div class="payu-wrap">
            <PayU />
          </div>
        </div>
      </div>
    </div>
  </section>

export default Payments
