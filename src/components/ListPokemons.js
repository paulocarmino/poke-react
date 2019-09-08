import React from "react";
import styled from "styled-components";

import PokeCard from "./PokeCard";

const ListPokemons = ({ pokemons }) => {
  return (
    <ListPokemonsContainer>
      {pokemons.map((pokemon, i) => (
        <PokeCard key={pokemon._id} pokemon={pokemon} id={i} />
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
