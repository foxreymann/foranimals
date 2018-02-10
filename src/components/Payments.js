import React from 'react';
import { Link } from 'react-router-dom';
import PayU from './PayU'

const Payments = () =>
  <section class="bg-primary text-center">
    <div class="container">
      <h2>Szybka pomoc</h2>
      <div className="row justify-content-center mb-5 mt-5">
        <div className="col-md-12 col-lg-6">
          <div class="">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="ER2HYC6HSTJWY" />

              <button type="submit" formtarget="_blank" class="btn btn-primary btn-xl btn-donate">
                Przekaż darowiznę z
                <i className="fab fa-cc-paypal fa-3x" />
              </button>
              <img alt="" border="0" src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif" />
            </form>
          </div>

        </div>
        <div className="col-md-12 col-lg-6">
          <div class="">
            <PayU />
          </div>
        </div>
      </div>
    </div>
  </section>

export default Payments
