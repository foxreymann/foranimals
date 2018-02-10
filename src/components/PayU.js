import React from 'react'

const URL = 'http://dave:8080'

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
      const res = await fetch(URL)
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
        <label>Kwota darowizny: <input type="number" onChange={this.updateDonation} value={this.state.donation} /> PLN</label>
        <input type="submit" onClick={this.makeDonation} value="Przekaż darowiznę z PayU" />
        <a href={this.state.payuUrl} id="payu" />
      </div>
    )
  }
}
