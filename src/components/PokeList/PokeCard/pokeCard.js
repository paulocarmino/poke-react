import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PokeAvatar from './pokeAvatar';
import PokeInfo from './PokeInfo/pokeInfo';

import { getPokemonByName } from '../../../services/pokeApi';

export const Container = styled.div`
  height: 100px;

  display: flex;
  align-items: center;
`;

export default function PokeCard({ pokemonName }) {
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    getPokemonByName(pokemonName).then(data => {
      setPokemon(data);
    });
  });

  return (
    <Container>
      <PokeAvatar avatar={pokemon.sprites} />
      <PokeInfo pokemon={pokemon} />
    </Container>
  );
}
