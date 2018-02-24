import React from 'react';
import Adoption from './Adoption'
import Adoptions from './Adoptions'

const species = [{id: 'Cat', name: "Kot"}, {id: 'Dog', name: "Pies"}]
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
      <div className="adoptionsPage content">
        <article className="filter">
          <h2>Szukam:</h2>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="row">
                {species.map(
                  (item) => {
                    const name = 'species'
                    return (
                      <div className="col-6 text-center mb-4" key={item.id}>
                        <input className="" type="radio" name={name} checked={this.state[name] === item.id} />
                        <label className={item.id} onClick={this.select.bind(this, name, item.id)}>{item.name}<span /></label>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="row">
                {sex.map(
                  (item) => {
                    const name = 'sex'
                    return (
                      <div className="col-6 text-center" key={item.id}>
                        <input type="radio" name={name} checked={this.state[name] === item.id} />
                        <label className={item.id} onClick={this.select.bind(this, name, item.id)}>{item.name}<span /></label>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
            <div className="col-12 col-md-4 text-center mb-4">
              <span>Wysterilizowany?</span>
              <div className="row">
                {neutered.map(
                  (item) => {
                    const name = 'neutered'
                    return (
                      <div className="col-6 text-center" key={item.id}>
                        <input type="radio" name={name} checked={this.state[name] === item.id} />
                        <label className={item.id} onClick={this.select.bind(this, name, item.id)}><span /></label>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <button className="btn btn-block btn-primary btn-xl pt-3 pb-3" onClick={this.filter}>Szukaj</button>
            </div>
          </div>
        </article>
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
