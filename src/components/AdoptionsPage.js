import React from 'react';
import Adoption from './Adoption'
import Adoptions from './Adoptions'

const species = [{id: 'Cat', name: "kot"}, {id: 'Dog', name: "pies"}]

const sex = [
  {
    id: 'Female',
    name: 'Samica'
  },
  {
    id: 'Male',
    name: 'Samiec'
  }
]

class AdoptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredAdoptions: [],
      showAdoptions: true,
      selectedSpecies: null,
      selectedSex: null
    }
  }

  selectSpecies = (id) => {
    this.setState({
      selectedSpecies: id
    })
    this.filter()
  }

  selectSex = (id) => {
    this.setState({
      selectedSex: id
    })
    this.filter()
  }

  reset = () => {
    this.setState({
      selectedSpecies: null,
      selectedSex: null,
      neutered: null
    })
    this.filter()
  }

  filter = () => {
    let filteredAdoptions = localStorage.getItem('allAdoptions')
    filteredAdoptions = JSON.parse(filteredAdoptions)
    if(this.state.selectedSpecies) {
      filteredAdoptions = filteredAdoptions.filter(adoption => adoption.species === this.state.selectedSpecies)
    }
    if(this.state.selectedSex) {
      filteredAdoptions = filteredAdoptions.filter(adoption => adoption.sex === this.state.selectedSex)
    }
    this.setState({
      filteredAdoptions: filteredAdoptions,
      showAdoptions: false
    })
console.log(this.state.selectedSpecies)
  }

  render() {
    return (
      <div className="adoptionsPage">
        <div className="filter">
        {species.map(
          (item) => {
            return (
              <div key={item.id}>
                <input type="radio" name="species" checked={this.state.selectedSpecies === item.id} />
                <label onClick={this.selectSpecies.bind(this, item.id)}>{item.name}<span /></label>
              </div>
            );
          }
        )}
        {sex.map(
          (item) => {
            return (
              <div key={item.id}>
                <input type="radio" name="sex" checked={this.state.selectedSex === item.id} />
                <label onClick={this.selectSex.bind(this, item.id)}>{item.name}<span /></label>
              </div>
            );
          }
        )}
        <input type="checkbox"  />
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
