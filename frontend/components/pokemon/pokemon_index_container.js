import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);


// sort-of semantically corrent explanation of what's going on in 14-17.

// const higherConnectedCOmponent = () => {
//   props= makepropsfrom(mapStateToProps,
//   mapDispatchToProps)
//
// return(
//   <PokemonIndex props={props} />
// )}
