import React from "react";
import styled from "styled-components";

import PokeAvatar from "./pokeAvatar";
import PokeInfo from "./pokeInfo";

export const Container = styled.div`
  height: 100px;

  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${props => (props.color ? props.color : "white")};
`;

export default function PokeCard({ pokemon, id }) {
  return (
    <Container color={pokemon.color}>
      <PokeInfo pokemon={pokemon} id={id} />
      <PokeAvatar avatar={pokemon.img} color={pokemon.color} />
    </Container>
  );
}
