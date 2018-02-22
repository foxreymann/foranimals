import React from 'react';
import Adoption from './Adoption'
import Adoptions from './Adoptions'

class AdoptionsPage extends React.Component {
  constructor(props) {
    super(props);
    let filteredAdoptions = localStorage.getItem('allAdoptions')
    filteredAdoptions = JSON.parse(filteredAdoptions)
console.dir(filteredAdoptions)
    this.state = {
      filteredAdoptions: []
    }
  }


  render() {
console.dir(this.state.filteredAdoptions)
    return (
      <div className="adoptionsPage">
        <Adoptions />
        <section>
          <div className='News-ul'>
            {this.state.filteredAdoptions.map(adoption => <Adoption key={adoption.id} adoption={adoption} />)}
          </div>
        </section>
      </div>
    )
  }
}

export default AdoptionsPage
