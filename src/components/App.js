import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import GlobalStyle from "../styles/global";
import Header from "./Header/header";
import NavTabs from "./NavTabs/navTabs";
import PokeList from "./PokeList/pokeList";

export const client = new ApolloClient({
  uri: "http://192.168.1.101:3333/"
});

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <NavTabs />
    <PokeList />
    <GlobalStyle />
  </ApolloProvider>
);
export default App;
