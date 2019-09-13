import React, { useContext } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import GET_ALL_POKEMONS from "../graphql/GetAllPokemons";
import { GlobalContext } from "../contexts/GlobalContext";
import Card from "./Card/Card";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";

const ListPokemons = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_POKEMONS);
  // eslint-disable-next-line
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

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <ListPokemonsContainer>
      {data &&
        data.pokemons.map((pokemon, i) => (
          <Card key={pokemon._id} pokemon={pokemon} id={i} />
        ))}
    </ListPokemonsContainer>
  );
};

export default ListPokemons;

export const ListPokemonsContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  margin: 10px 0px;
`;
