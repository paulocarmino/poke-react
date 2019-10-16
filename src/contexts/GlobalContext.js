import React, { useState } from "react";

const GlobalContext = React.createContext([{}, () => {}]);

const GlobalProvider = props => {
  const [state, setState] = useState({
    pokemonsList: [],
    searchTerm: "",
    onTop: "",
    detailsIsOpen: false,
    activePokemon: {},
    indexActivePokemon: "",
    prevPokemon: {},
    nextPokemon: {}
    // indexActivePokemon: 1,
    // detailsIsOpen: true,
    // activePokemon: {
    //   __typename: "Pokemon",
    //   _id: "5d7301005764540007b17815",
    //   number: "#001",
    //   name: "Bulbasaur",
    //   description:
    //     "Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker green patches. It has red eyes with white pupils and scleras and pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.",
    //   specie: "Seed Pokémon",
    //   weight: "6.9 kg",
    //   height: "0.7 m",
    //   img:
    //     "https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png",
    //   color: "rgb(64, 184, 104)",
    //   types: ["Grass", "Poison"],
    //   stats: {
    //     hp: "45",
    //     attack: "49",
    //     defense: "49",
    //     specialAttack: "65",
    //     specialDefense: "65",
    //     speed: "45",
    //     total: "318"
    //   },
    //   strengths: ["Fighting", "Water", "Grass", "Electric", "Fairy"],
    //   weaknesses: ["Flying", "Fire", "Psychic", "Ice"],
    //   evolution: []
    // }
  });

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
