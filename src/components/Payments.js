import React from 'react';
import { Link } from 'react-router-dom';
import payu from '../payu.svg'

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
 <form method="POST" action="https://secure.payu.com/api/v2_1/orders" id="payu-payment-form" class="">
<input type="hidden" name="notifyUrl" value="http://foranimals.org.pl/" />
<input type="hidden" name="continueUrl" value="http://foranimals.org.pl/" />
<input type="hidden" name="products[0].name" value="Darowizna" />
<input type="hidden" name="products[0].unitPrice" value="1000" />
<input type="hidden" name="products[0].quantity" value="1" />
<input type="hidden" name="customerIp" value="62.31.87.16" />
<input type="hidden" name="merchantPosId" value="220697" />
<input type="hidden" name="description" value="New order" />
<input type="hidden" name="currencyCode" value="PLN" />
<input type="hidden" name="totalAmount" value="1000" />
<input type="hidden" name="OpenPayu-Signature" value="sender=220697;algorithm=SHA-256;signature=083bef5da2b587e76a142642fbbac16753725b3e7a2fad8a1c0503ba1e038b69" /><button type="submit" formtarget="_blank" id="" class=""></button>
</form>
          </div>
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
