import React from 'react';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      Hello, pokemons
    </div>
  </Provider>
);
 
export default Root;
