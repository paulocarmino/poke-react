import React, { useState, useEffect } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

import axios from "axios";

import Header from "./Header";
import PokeCard from "./PokeCard";
// import Loading from "./Loading";

const GET_ALL_POKEMONS = gql`
  query {
    pokemons {
      number
      name
      description
    }
  }
`;

const PokeList = () => {
  // const [initialData, setInitialData] = useState({ pokemons: [] });
  // const [loading, setLoading] = useState({ isLoading: true });
  const [pokemonList, setPokemonList] = useState({ pokemons: [] });
  const [getPokemons, { loading, data }] = useLazyQuery(GET_ALL_POKEMONS);

  useEffect(() => {
    function fetchPokemons() {
      console.log("foi");
      getPokemons();
    }
    fetchPokemons();
  }, [getPokemons]);

  if (loading) return <p>Loading ...</p>;

  if (data && data.pokemons) {
    console.log(data);
    setPokemonList(data.pokemons);
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios("http://localhost:3333/pokemons");
  //     setInitialData({ pokemons: result.data });
  //     setData({ pokemons: result.data });
  //     setLoading({ isLoading: false });
  //   }
  //   fetchData();
  // }, []);

  // const filterList = event => {
  //   let pokemonsFiltered = initialData.pokemons;
  //   pokemonsFiltered = pokemonsFiltered.filter(
  //     pokemon =>
  //       pokemon.name.toLowerCase().search(event.target.value.toLowerCase()) !==
  //       -1
  //   );
  //   setData({ pokemons: pokemonsFiltered });
  // };

  // if (loading.isLoading) {
  //   return (
  //     <>
  //       <Header />
  //       <InputSearch
  //         type="text"
  //         placeholder="Search pokemons by name..."
  //         disabled
  //       />
  //       {/* <Loading /> */}
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
      {/* <InputSearch
        type="text"
        placeholder="Search pokemons by name..."
        onChange={filterList}
      /> */}
      <Container>
        {pokemonList.pokemons.map((pokemon, i) => (
          <PokeCard key={pokemon._id} pokemon={pokemon} id={i} />
        ))}
      </Container>
    </>
  );
};

export default PokeList;

export const Container = styled.div`
  // height: calc(100% - 90px);
  overflow: hidden;
  margin: 15px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
`;

export const ContainerLoading = styled.div`
  margin-top: 20px;
`;

export const TitleError = styled.h1`
  margin-top: 40px;
`;

export const InputSearch = styled.input`
  margin: 5px 15px 10px 15px;
  width: 92%;
  background-color: #e6e6e6;
  border: none;
  border-radius: 20px;
  height: 32px;
  padding: 0px 20px;
  font-size: 0.8rem;
`;
