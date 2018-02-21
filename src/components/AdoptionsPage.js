import React from 'react';
import Adoptions from './Adoptions'

class AdoptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="adoptionsPage">
        <Adoptions />
      </div>
    )
  }
}

export default AdoptionsPage
