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
      species: null,
      sex: null,
      neutered: null
    }
  }

  select = (name, id) => {
    const selected = (id === this.state[name]) ? null : id
    this.setState({
      [`${name}`]: selected
    })
  }

  filter = () => {
    let filteredAdoptions = localStorage.getItem('allAdoptions')
    filteredAdoptions = JSON.parse(filteredAdoptions)
    if(this.state.species) {
      filteredAdoptions = filteredAdoptions.filter(adoption => adoption.species === this.state.species)
    }
    if(this.state.sex) {
      filteredAdoptions = filteredAdoptions.filter(adoption => adoption.sex === this.state.sex)
    }
    if(this.state.neutered === 'Yes') {
      filteredAdoptions = filteredAdoptions.filter(adoption => adoption.neutered)
    }
    if(this.state.neutered === 'No') {
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
        <h1>Szukam:</h1>
        {species.map(
          (item) => {
            const name = 'species'
            return (
              <div key={item.id}>
                <input type="radio" name={name} checked={this.state[name] === item.id} />
                <label onClick={this.select.bind(this, name, item.id)}>{item.name}<span /></label>
              </div>
            )
          }
        )}
        {sex.map(
          (item) => {
            const name = 'sex'
            return (
              <div key={item.id}>
                <input type="radio" name={name} checked={this.state[name] === item.id} />
                <label onClick={this.select.bind(this, name, item.id)}>{item.name}<span /></label>
              </div>
            )
          }
        )}
        <label>Wysterilizowany?</label>
        {neutered.map(
          (item) => {
            const name = 'neutered'
            return (
              <div key={item.id}>
                <input type="radio" name={name} checked={this.state[name] === item.id} />
                <label onClick={this.select.bind(this, name, item.id)}>{item.name}<span /></label>
              </div>
            )
          }
        )}
        <button onClick={this.filter}>Szukaj</button><br />
        </div>
        { this.state.showAdoptions ? <Adoptions /> : null }
        <section>
          <div className='News-ul'>
            {this.state.filteredAdoptions.map(adoption => <Adoption key={adoption.id} adoption={adoption} />)}
          </div>
          { (!this.state.showAdoptions && !this.state.filteredAdoptions.length) ?
          <div>
            <article className="adopt">
              Brak wyników.
            </article>
          </div>
          : null }
        </section>
      </div>
    )
  }
}

export default AdoptionsPage
