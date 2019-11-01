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

  // only works for exact match, not partial  🤷🏾‍♀
  filterPokemon = (e) => {
    let name = e.target.value
    let filteredPokemon = this.state.pokemon.slice().filter(poke => poke.name === name )
    this.setState({ filteredPokemon })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onSearchChange={this.filterPokemon} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon.length ? this.state.filteredPokemon : this.state.pokemon} />
      </div>
    )
  }
}

export default PokemonPage
