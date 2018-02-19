import React from 'react'
import PayU from './PayU'

const Payments = () =>
  <section className="text-center">
    <div className="container p-5">
      <h2 className="">Szybka pomoc</h2>
      <div className="row">
        <div className="col-md-12 col-lg-4 offset-lg-1">
          <div className="paypal-wrap pt-5">
            <i className="fab fa-cc-paypal fa-3x mb-5" />
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="ER2HYC6HSTJWY" />
              <button type="submit" formTarget="_blank" className="btn btn-block btn-primary btn-xl btn-donate mt-3 mb-3 pl-2 pr-2">
                Przekaż darowiznę z PayPal
              </button>
              <img alt="" border="0" src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif" />
            </form>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 offset-lg-2">
          <div className="payu-wrap pt-5">
            <PayU />
          </div>
        </div>
      </div>
    </div>
  </section>

export default Payments
