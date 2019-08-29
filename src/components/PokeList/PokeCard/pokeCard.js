import React from "react";
import styled from "styled-components";

import PokeAvatar from "./pokeAvatar";
import PokeInfo from "./pokeInfo";

export const Container = styled.div`
  height: 115px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${props => (props.color ? props.color : "white")};
  z-index: -2;
  right: -50px;
  cursor: pointer;
`;

export default function PokeCard({ pokemon, id }) {
  return (
    <Container color={pokemon.color}>
      <PokeInfo pokemon={pokemon} id={id} />
      <PokeAvatar avatar={pokemon.img} />
    </Container>
  );
}
