import React, { useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import { GlobalContext } from "../contexts/GlobalContext";
import Header from "../components/Header";
import ListPokemons from "../components/ListPokemons";
import SearchBar from "../components/Shared/SearchBar";

import Details from "../pages/Details";

const Home = () => {
  const [state, setState] = useContext(GlobalContext);

  const togglePokemonDetails = () => {
    setState(state => ({ ...state, detailsIsOpen: false }));
  };

  return (
    <>
      <Header />
      <HomeContainer>
        <HomeContent>
          <h2>Welcome, stranger...</h2>
          <SearchBar />
          <ListPokemons />
        </HomeContent>
      </HomeContainer>

      <SwipeableDrawer
        disableBackdropTransition
        anchor="bottom"
        open={state.detailsIsOpen}
        onOpen={togglePokemonDetails}
        onClose={togglePokemonDetails}
      >
        <DrawerContainer>
          <Details pokemon={state.activePokemon} />
        </DrawerContainer>
      </SwipeableDrawer>
    </>
  );
};

export default Home;

export const HomeContainer = styled.div`
  margin: 15px 15px;
`;
export const HomeContent = styled.div``;

export const DrawerContainer = styled.div`
  width: 100%;
  ${media.greaterThan("medium")`
    max-width: 395px;
  `}
`;
