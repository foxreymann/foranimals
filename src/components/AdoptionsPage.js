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

const neutered = [
  {
    id: 'Yes',
    name: 'Tak'
  },
  {
    id: 'No',
    name: 'Nie'
  }
]

class AdoptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredAdoptions: [],
      showAdoptions: true,
      selectedSpecies: null,
      selectedSex: null,
      selectedNeutered: null
    }
  }

  selectSpecies = (id) => {
    const selected = (id === this.state.selectedSpecies) ? null : id
    this.setState({
      selectedSpecies: selected
    })
  }

  selectSex = (id) => {
    const selected = (id === this.state.selectedSex) ? null : id
    this.setState({
      selectedSex: selected
    })
  }

  selectNeutered = (id) => {
    const selected = (id === this.state.selectedNeutered) ? null : id
    this.setState({
      selectedNeutered: selected
    })
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
    if(this.state.selectedNeutered === 'Yes') {
      filteredAdoptions = filteredAdoptions.filter(adoption => adoption.neutered)
    }
    if(this.state.selectedNeutered === 'No') {
      filteredAdoptions = filteredAdoptions.filter(adoption => !adoption.neutered)
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
        <h1>Filtry:</h1>
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
        <label>Wysterilizowany?</label>
        {neutered.map(
          (item) => {
            return (
              <div key={item.id}>
                <input type="radio" name="neutered" checked={this.state.selectedNeutered === item.id} />
                <label onClick={this.selectNeutered.bind(this, item.id)}>{item.name}<span /></label>
              </div>
            );
          }
        )}
        <button onClick={this.filter}>Filtruj</button><br />
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
