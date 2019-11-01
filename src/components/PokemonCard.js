import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    showFront : true
  }

  handleClick = () => {
    this.setState({ showFront : !this.state.showFront})
  }

  render() {
    const front_image = this.props.pokemon.sprites.front;
    const back_image = this.props.pokemon.sprites.back;

    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.showFront ? front_image : back_image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.weight} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
