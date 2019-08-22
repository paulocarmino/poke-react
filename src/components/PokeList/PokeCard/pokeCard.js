import React from "react";
import styled from "styled-components";

import PokeAvatar from "./PokeAvatar/pokeAvatar";
import PokeInfo from "./PokeInfo/pokeInfo";

export const Container = styled.div`
  height: 100px;

  display: flex;
  align-items: center;
`;

export default function PokeCard() {
  return (
    <Container>
      <PokeAvatar />
      <PokeInfo />
    </Container>
  );
}
