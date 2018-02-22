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
      filteredAdoptions: [],
      selectedSpecies: null,
      species: [{id: 1, name: "cat"}, {id: 2, name: "dog"}]
    }
  }

  selectSpecies = (id) => {
    this.setState({selectedSpecies: id});
  }

  reset = () => {
    this.setState({selectedSpecies: null});
  }

  render() {
console.dir(this.state.filteredAdoptions)
    return (
      <div className="adoptionsPage">
        <div className="filter">
        {this.state.species.map(
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
