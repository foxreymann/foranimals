import React from 'react';
import payuSvg from '../assets/payu.svg';

const URL = 'http://dave:8081'

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

  makeDonation = async () => {
    try {
      const res = await fetch(URL + '?amount=' + this.state.donation)
      const payuUrl = (await res.json()).redirect
      this.setState({
        payuUrl: payuUrl
      })
      document.getElementById('payu').click()
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <img src={payuSvg} className="mb-2" alt="" style={{height:"50px"}}/>
        </div>
        <label>Kwota darowizny: <input type="number" onChange={this.updateDonation} value={this.state.donation} /> PLN</label>
        <input type="submit" onClick={this.makeDonation} value="Przekaż darowiznę z PayU" class="btn btn-primary btn-xl btn-donate mt-3 mb-3"/>
        <a href={this.state.payuUrl} id="payu" />
      </div>
    )
  }
}
