import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import SwipeableRoutes from "react-swipeable-routes";

// import { ApolloProvider } from "@apollo/react-hooks";
// import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import GlobalStyle from "../styles/global";
import Header from "./Header";
import PokeList from "./PokeList/pokeList";

// export const client = new ApolloClient({
//   uri: "http://localhost:3333/"
// });

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:3333/"
});
const client = new ApolloClient({
  cache,
  link
});

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <Router>
      <Route path="/" exact component={PokeList} />
      {/* <SwipeableRoutes> */}
      {/* </SwipeableRoutes> */}
    </Router>
    <GlobalStyle />
  </ApolloProvider>
);
export default App;
