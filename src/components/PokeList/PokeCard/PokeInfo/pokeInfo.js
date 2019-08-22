import React from "react";

import { Container, Label } from "./styles";
import PokeName from "./pokeName";

export default function PokeInfo({ pokemon }) {
  return (
    <Container>
      <h3>
        <span>#00{pokemon.id}</span> <PokeName name={pokemon.name} />
      </h3>
      {pokemon.types.map(type => (
        <Label key={type.name} color={type.color}>
          {type.name}
        </Label>
      ))}
      <p>{pokemon.description}</p>
    </Container>
  );
}
