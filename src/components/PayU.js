import React from 'react';
import payuSvg from '../payu.svg';

export default class PayU extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      donation: 10
    };
  }

  updateDonation = (event) => {
    this.setState({
      donation: event.target.value
    })
  }

  render() {
    return (
      <form method="POST" action="https://secure.payu.com/api/v2_1/orders" id="payu-payment-form" class="">
        <label>Kwota darowizny: <input type="number" onChange={this.updateDonation} value={this.state.donation} /> PLN</label>
        <input type="hidden" name="notifyUrl" value="http://foranimals.org.pl/" />
        <input type="hidden" name="continueUrl" value="http://foranimals.org.pl/" />
        <input type="hidden" name="products[0].name" value="Darowizna" />
        <input type="hidden" name="products[0].unitPrice" value={this.state.donation * 100} />
        <input type="hidden" name="products[0].quantity" value="1" />
        <input type="hidden" name="customerIp" value="62.31.87.16" />
        <input type="hidden" name="merchantPosId" value="220697" />
        <input type="hidden" name="description" value="New order" />
        <input type="hidden" name="currencyCode" value="PLN" />
        <input type="hidden" name="totalAmount" value={this.state.donation * 100} />
        <input type="hidden" name="OpenPayu-Signature" value="sender=220697;algorithm=SHA-256;signature=083bef5da2b587e76a142642fbbac16753725b3e7a2fad8a1c0503ba1e038b69" />
        <button type="submit" formtarget="_blank" class="btn btn-primary btn-xl btn-donate">
          Przekaż darowiznę z
          <img src={payuSvg} className="" alt=""/>
        </button>
      </form>
    )
  }
}
