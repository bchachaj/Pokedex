import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokemons = this.props.pokemon.map((el) => <li key={el.id}>{el.name}</li>);
    return (
      <ul>
        {pokemons}
      </ul>
    );
  }
}


export default PokemonIndex;
