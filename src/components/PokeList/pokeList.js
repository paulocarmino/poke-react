import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import styled from "styled-components";

import PokeCard from "./PokeCard/pokeCard";

export const Container = styled.div`
  height: calc(100% - 90px);
  margin: 0 30px;
`;

export default function PokeList() {
  const { loading, error, data } = useQuery(gql`
    {
      pokemons {
        id
        name
        description
        thumb
        types
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      {data.pokemons.map((pokemon, i) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} id={i} />
      ))}
    </Container>
  );
}
