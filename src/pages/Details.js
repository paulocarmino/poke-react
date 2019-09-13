import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../contexts/GlobalContext";
import DetailsNavigation from "../components/Details/DetailsNavigation";
import DetailsHeader from "../components/Details/DetailsHeader";
import DetailsTabs from "../components/Details/DetailsTabs";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const POKEMON_LIST = gql`
  query Pokemons($name: String) {
    pokemons(where: { name_contains: $name }, orderBy: number_ASC) @client {
      _id
      number
      name
      specie
      weight
      height
      description
      color
      img
      types
      strengths
      weaknesses
      stats {
        hp
        attack
        defense
        specialAttack
        specialDefense
        speed
        total
      }
    }
  }
`;

const Details = () => {
  // eslint-disable-next-line
  const [state, setState] = useContext(GlobalContext);
  const { data, loading } = useQuery(POKEMON_LIST);

  if (loading) return "Loading";

  const prevPokemon = data.pokemons[state.indexActivePokemon - 1];
  const nextPokemon = data.pokemons[state.indexActivePokemon + 1];

  return (
    <DetailsContainer color={state.activePokemon.color}>
      <DetailsNavigation
        prev={prevPokemon}
        next={nextPokemon}
        idActive={state.indexActivePokemon}
      />
      <DetailsHeader />
      <DetailsTabs />
    </DetailsContainer>
  );
};

export default Details;

export const DetailsContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.color ? props.color : "white")};
`;
