import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";

import { GlobalProvider } from "./contexts/GlobalContext";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Home from "./pages/Home";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://10.61.217.146:4000/graphql",
  cache,
  connectToDevTools: true,
  clientState: { defaults: { pokemons: [] }, resolvers: {} }
});

// cache.writeData();
// cache.writeData({ data: { defaults } });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <Header />
        <Home />
      </GlobalProvider>
      <GlobalStyle />
    </ApolloProvider>
  );
};
export default App;
