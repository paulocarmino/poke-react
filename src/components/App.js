import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import SwipeableRoutes from 'react-swipeable-routes';

import GlobalStyle from '../styles/global';
import Header from './Header';
import PokeList from './PokeList/pokeList';

export const client = new ApolloClient({
  uri: 'http://10.61.217.146:3333/'
});

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <Router>
      {/* <NavTabs /> */}
      <SwipeableRoutes>
        <Route path="/" exact component={PokeList} />
        {/* <Route path="/items/" component={ItemList} /> */}
      </SwipeableRoutes>
    </Router>
    <GlobalStyle />
  </ApolloProvider>
);
export default App;
