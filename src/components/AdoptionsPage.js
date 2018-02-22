import React from 'react';
import Adoption from './Adoption'
import Adoptions from './Adoptions'

let filters = {
  selectedSpecies: null,
}

const species = [{id: 'Cat', name: "kot"}, {id: 'Dog', name: "pies"}]

class AdoptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredAdoptions: [],
      showAdoptions: true
    }
  }

  selectSpecies = (id) => {
    filters.selectedSpecies = id;
    this.filter()
  }

  reset = () => {
    filters = {}
    this.filter()
  }

  filter = () => {
    let filteredAdoptions = localStorage.getItem('allAdoptions')
    filteredAdoptions = JSON.parse(filteredAdoptions)
    if(filters.selectedSpecies) {
      filteredAdoptions = filteredAdoptions.filter(adoption => adoption.species === filters.selectedSpecies)
    }
    this.setState({
      filteredAdoptions: filteredAdoptions,
      showAdoptions: false
    })
  }

  render() {
    return (
      <div className="adoptionsPage">
        <div className="filter">
        {species.map(
          (item) => {
            return (
              <div key={item.id}>
                <input type="radio" name="myRadio" checked={this.state.selectedSpecies === item.id} />
                <label onClick={this.selectSpecies.bind(this, item.id)}>{item.name}<span /></label>
              </div>
            );
          }
        )}
        <button onClick={this.reset}>Reset</button>
        </div>
        { this.state.showAdoptions ? <Adoptions /> : null }
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
