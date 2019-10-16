import { gql } from "apollo-boost";

const GET_ALL_POKEMONS = gql`
  query Pokemons($name: String, $skip: Int) {
    pokemons(
      where: { name_contains: $name }
      first: 20
      skip: $skip
      orderBy: number_ASC
    ) {
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
