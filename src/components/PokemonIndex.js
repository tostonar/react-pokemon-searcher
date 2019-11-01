import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon : [],
    filteredPokemon: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => this.setState({pokemon}))
  }

  // now works with partial  🤷🏾‍♀
  filterPokemon = (e) => {
    let name = e.target.value
    let filteredPokemon = this.state.pokemon.slice().filter(poke => poke.name.toLowerCase().includes(name)  )
    this.setState({ filteredPokemon })
  }

  // create a new pokemon
  handleSubmit = (event, newPokemon) => {
    event.preventDefault();

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: newPokemon.name,
        weight: newPokemon.hp,
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl
        }
      })
    }).then((res) => res.json())
    .then((data) =>  this.setState({pokemon: [...this.state.pokemon, data]}))
    .catch((err)=>console.log(err))

  }




  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search onSearchChange={this.filterPokemon} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon.length ? this.state.filteredPokemon : this.state.pokemon} />
      </div>
    )
  }
}

export default PokemonPage
