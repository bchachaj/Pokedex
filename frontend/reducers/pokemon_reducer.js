import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.merge({}, state, action.pokemon);
    default:
      return state;
  }
};
