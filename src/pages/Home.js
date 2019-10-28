import React, { useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Drawer from "@material-ui/core/Drawer";

import Container from "@material-ui/core/Container";
import { Waypoint } from "react-waypoint";

import { GlobalContext } from "../contexts/GlobalContext";
import ListPokemons from "../components/ListPokemons";

import Details from "../pages/Details";

const Home = () => {
  const [state, setState] = useContext(GlobalContext);

  const togglePokemonDetails = () => {
    setState(state => ({ ...state, detailsIsOpen: false }));
  };

  // disableBodyScroll();

  return (
    <HomeContainer maxWidth="lg">
      <Waypoint
        onEnter={() => {
          setState(state => ({
            ...state,
            onTop: true
          }));
        }}
        onLeave={() => {
          setState(state => ({
            ...state,
            onTop: false
          }));
        }}
      />
      <HomeContent>
        <ListPokemons />
      </HomeContent>

      <Drawer
        disableBackdropTransition
        anchor="bottom"
        open={state.detailsIsOpen}
        onOpen={togglePokemonDetails}
        onClose={togglePokemonDetails}
        id="drawer"
      >
        <DrawerContainer>
          <Details pokemon={state.activePokemon} />
        </DrawerContainer>
      </Drawer>
    </HomeContainer>
  );
};

export default Home;

export const HomeContainer = styled(Container)`
  height: 100%;
  margin: 0px 15px;
  margin-top: 70px;

  ${media.greaterThan("medium")`
    margin-top: 65px;
  `}
`;
export const HomeContent = styled.div`
  height: 100%;
  h2 {
    margin-bottom: 20px;
  }
`;

export const DrawerContainer = styled.div`
  width: 100%;
`;
