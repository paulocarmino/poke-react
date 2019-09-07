import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

import GlobalStyle from "../styles/global";
import PokeList from "./PokeList";
import PokeDetails from "./PokeDetails";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://192.168.1.2:4000/graphql",
  cache
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" exact component={PokeList} />
      <Route path="/pokemon/:id" component={PokeDetails} />
    </Router>
    <GlobalStyle />
  </ApolloProvider>
);
export default App;
