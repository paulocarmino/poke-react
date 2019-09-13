import { gql } from "apollo-boost";

const GET_ALL_POKEMONS = gql`
  query Pokemons($name: String) {
    pokemons(where: { name_contains: $name }, orderBy: number_ASC) {
      _id
      number
      name
      specie
      weight
      height
      description
      color
      img
      types
      strengths
      weaknesses
      stats {
        hp
        attack
        defense
        specialAttack
        specialDefense
        speed
        total
      }
    }
  }
`;

export default GET_ALL_POKEMONS;
