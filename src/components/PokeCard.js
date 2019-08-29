import React from 'react';
import styled from 'styled-components';

import PokeAvatar from './PokeAvatar';
import PokeInfo from './PokeInfo';

export const Container = styled.div`
  height: 115px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${props => (props.color ? props.color : 'white')};
  z-index: 1;
  right: -50px;
  cursor: pointer;
`;

export default function PokeCard({ pokemon, id }) {
  const goToPokemonDetails = name => {
    console.log('Clicked Pokemon: ' + name);
  };

  return (
    <Container
      color={pokemon.color}
      onClick={() => goToPokemonDetails(pokemon.name)}
    >
      <PokeInfo pokemon={pokemon} id={id} />
      <PokeAvatar avatar={pokemon.img} />
    </Container>
  );
}
