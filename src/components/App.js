import React from "react";

import GlobalStyle from "../styles/global";
import Header from "./Header/header";
import NavTabs from "./NavTabs/navTabs";
import PokeList from "./PokeList/pokeList";

// import PokeApi from "../pokeApi";

const App = () => (
  <>
    <Header />
    <NavTabs />
    <PokeList />
    <GlobalStyle />
  </>
);
export default App;
