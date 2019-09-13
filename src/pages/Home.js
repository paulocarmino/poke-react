import React, { useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import { GlobalContext } from "../contexts/GlobalContext";
import Header from "../components/Header";
import ListPokemons from "../components/ListPokemons";
// import SearchBar from "../components/Shared/SearchBar";

import Details from "../pages/Details";

const Home = () => {
  const [state, setState] = useContext(GlobalContext);

  const togglePokemonDetails = () => {
    setState(state => ({ ...state, detailsIsOpen: false }));
  };

  const toggleAbout = () => {
    setState(state => ({ ...state, aboutIsOpen: false }));
  };

  return (
    <>
      <Header />
      <HomeContainer>
        <HomeContent>
          {/* <SearchBar /> */}
          <h2>Welcome, stranger...</h2>
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

      <SwipeableDrawer
        disableBackdropTransition
        anchor="top"
        open={state.aboutIsOpen}
        onOpen={toggleAbout}
        onClose={toggleAbout}
      >
        <DrawerContainer>
          <h1>About this Project</h1>
          <p>Soon!</p>
        </DrawerContainer>
      </SwipeableDrawer>
    </>
  );
};

export default Home;

export const HomeContainer = styled.div`
  margin: 0px 15px;
  margin-top: 80px;
`;
export const HomeContent = styled.div`
  h2 {
    margin-bottom: 20px;
  }
`;

export const DrawerContainer = styled.div`
  width: 100%;
  ${media.greaterThan("medium")`
    max-width: 395px;
  `}
`;
