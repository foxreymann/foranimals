import React from 'react';
import Adoptions from './Adoptions'

class AdoptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adoption: props.adoption
    }
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
