import React from "react";
import styled from "styled-components";

import PokeAvatar from "./pokeAvatar";
import PokeInfo from "./PokeInfo/pokeInfo";

export const Container = styled.div`
  height: 100px;

  display: flex;
  align-items: center;
`;

export default function PokeCard({ pokemon, id }) {
  return (
    <Container>
      <PokeAvatar avatar={pokemon.thumb} />
      <PokeInfo pokemon={pokemon} id={id} />
    </Container>
  );
}
