import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    const pokemons = this.props.pokemon.map(p => <PokemonCard pokemon={p} key={p.id} />)
    return (
      <Card.Group itemsPerRow={6}>

        { pokemons }

      </Card.Group>
    )
  }
}

export default PokemonCollection
