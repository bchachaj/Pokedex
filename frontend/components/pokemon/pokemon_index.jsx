import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokemons = this.props.pokemon.map((el) => <li key={el.id}>{el.name} <img className="pokeImg" src={el.image_url}/></li>);
    return (
      <ul>
        {pokemons}
      </ul>
    );
  }
}


export default PokemonIndex;
