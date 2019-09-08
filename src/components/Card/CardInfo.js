import React from "react";
import styled from "styled-components";

import Types from "../Shared/Types/Types";

export default function CardInfo({ pokemon }) {
  return (
    <Container>
      <PokeBasicInfo>
        <span>{pokemon.number}</span>
        <h3>{pokemon.name}</h3>
      </PokeBasicInfo>
      <Types types={pokemon.types} small />
    </Container>
  );
}

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 0.6rem;
    color: #fff;
  }

  h3 {
    font-size: 0.9rem;
    margin-bottom: 5px;
    color: #fff;
  }
`;

export const TypesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokeBasicInfo = styled.div``;
