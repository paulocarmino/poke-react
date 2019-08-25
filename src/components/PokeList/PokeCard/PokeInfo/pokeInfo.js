import React from "react";

import { Container, Label } from "./styles";
import PokeName from "./pokeName";

export default function PokeInfo({ pokemon, id }) {
  return (
    <Container>
      <h3>
        <span>#{id}</span> <PokeName pokemonName={pokemon.name} />
      </h3>
      {pokemon && pokemon.types.map((type, i) => <Label key={i}>{type}</Label>)}
      <p>{pokemon.description}</p>
    </Container>
  );
}
