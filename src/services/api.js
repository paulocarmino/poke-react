export function loadPokemons() {
  return [
    {
      id: 1,
      name: "bulbasaur",
      description:
        "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.",
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      types: [
        {
          name: "poison",
          color: "#7830d0"
        },
        {
          name: "grass",
          color: "#719c2e"
        }
      ]
    },
    {
      id: 2,
      name: "pikachu",
      description:
        "Its nature is to store up electricity. Forests\nwhere nests of Pikachu live are dangerous,\nsince the trees are so often struck by lightning.",
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png",
      types: [
        {
          name: "electric",
          color: "#0071c1"
        }
      ]
    },
    {
      id: 3,
      name: "caterpie",
      description:
        "Perhaps because it would like to grow up\nquickly, it has a voracious appetite, eating\na hundred leaves a day.",
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      types: [
        {
          name: "bug",
          color: "#db0708"
        }
      ]
    },
    {
      id: 4,
      name: "ivysaur",
      description:
        "There is a bud on this Pokémon’s back. To support its weight,\nIvysaur’s legs and trunk grow thick and strong.\nIf it starts spending more time lying in the sunlight,\nit’s a sign that the bud will bloom into a large flower soon.",
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      types: [
        {
          name: "poison",
          color: "#7830d0"
        },
        {
          name: "grass",
          color: "#719c2e"
        }
      ]
    },
    {
      id: 5,
      name: "misdreavus",
      description:
        "What gives meaning to its life is surprising\nothers. If you set your ear against the red orbs\naround its neck, you can hear shrieking.",
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
      types: [
        {
          name: "ghost",
          color: "#7aa095"
        }
      ]
    }
  ];
}
