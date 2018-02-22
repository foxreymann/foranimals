import React from 'react';
import Adoption from './Adoption'
import Adoptions from './Adoptions'

class AdoptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredAdoptions: [],
      selectedSpecies: null,
      species: [{id: 'cat', name: "kot"}, {id: 'dog', name: "pies"}]
    }
  }

  selectSpecies = (id) => {
    this.setState({selectedSpecies: id});
    this.filter()
  }

  reset = () => {
    this.setState({selectedSpecies: null});
  }

  filter = () => {
    let filteredAdoptions = localStorage.getItem('allAdoptions')
console.log(filteredAdoptions)
    filteredAdoptions = JSON.parse(filteredAdoptions)
console.log(filteredAdoptions)
    this.setState({
      filteredAdoptions: filteredAdoptions
    })
console.log(this.state.filteredAdoptions)
  }

  render() {
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
