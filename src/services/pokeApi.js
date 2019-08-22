const Pokedex = require('pokedex-promise-v2');
const PokeApi = new Pokedex();

const interval = {
  limit: 10,
  offset: 25
};

export const getPokemonsList = () => {
  return PokeApi.getPokemonsList(interval);
};

export const getPokemonByName = name => {
  return PokeApi.getPokemonByName(name);
};

export const getPokemonSpeciesByName = specie => {
  return PokeApi.getPokemonSpeciesByName(specie);
};
