import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  text-transform: capitalize;
  display: inline;
`;

export default function PokeInfo({ pokemonName }) {
  return <Container>{pokemonName ? pokemonName : ''}</Container>;
}
