import React, { useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { useQuery } from "@apollo/react-hooks";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import GET_ALL_POKEMONS from "../graphql/GetAllPokemons";
import { GlobalContext } from "../contexts/GlobalContext";
import ListPokemons from "../components/ListPokemons";
import SearchBar from "../components/Shared/SearchBar";
import PokemonDetails from "../components/PokemonDetails";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";

const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_POKEMONS);
  const [state, setState] = useContext(GlobalContext);

  fetchMore({
    variables: {
      name: state.searchTerm
    },
    updateQuery: (prev, { fetchMoreResult, ...rest }) => {
      if (!fetchMoreResult) return prev;
      if (!prev) return;
      return {
        ...fetchMoreResult,
        pokemonsList: {
          ...fetchMoreResult.pokemons,
          pokemonsList: [...prev.pokemons, ...fetchMoreResult.pokemons]
        }
      };
    }
  });

  const togglePokemonDetails = () => {
    setState(state => ({ ...state, detailsIsOpen: false }));
  };

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <>
      <HomeContainer>
        {/* <Header/> */}
        <HomeContent>
          <SearchBar />
          {data && <ListPokemons pokemons={data.pokemons} />}
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
          <PokemonDetails pokemonId={state.activePokemon._id} />
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
