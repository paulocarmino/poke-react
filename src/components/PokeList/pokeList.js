import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PokeCard from './PokeCard/pokeCard';

import { getPokemonsList } from '../../services/pokeApi';

export const Container = styled.div`
  height: calc(100% - 90px);
  margin: 0 30px;
`;

export default function PokeList() {
  const [pokemonsList, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonsList().then(data => {
      setPokemons(data.results);
    });
  }, []);

  return (
    <Container>
      {pokemonsList.map(data => (
        <PokeCard key={data.url} pokemonName={data.name} />
      ))}
    </Container>
  );
}
