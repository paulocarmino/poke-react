import React, { useState, useEffect } from 'react';

import { Container, Label } from './styles';
import PokeName from './pokeName';

import { getPokemonSpeciesByName } from '../../../../services/pokeApi';

export default function PokeInfo({ pokemon }) {
  const [pokeDescription, setPokeDescription] = useState('');

  useEffect(() => {
    getPokemonSpeciesByName(pokemon.name).then(data => {
      data && setPokeDescription(data.flavor_text_entries[1].flavor_text);
    });
  });

  return (
    <Container>
      <h3>
        <span>#0{pokemon.id}</span> <PokeName pokemonName={pokemon.name} />
      </h3>
      {pokemon &&
        pokemon.types.map(type => (
          <Label key={type.type.name} color={type.color}>
            {type.type.name}
          </Label>
        ))}
      <p>{pokeDescription}</p>
    </Container>
  );
}
