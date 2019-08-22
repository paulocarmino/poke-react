import React from "react";
import styled from "styled-components";

import PokeCard from "./PokeCard/pokeCard";

export const Container = styled.div`
  height: calc(100% - 90px);
  margin: 0 30px;
  // padding: 15px 5px;
  // border: 1px solid #000;
`;

export default function PokeList() {
  return (
    <Container>
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
    </Container>
  );
}
