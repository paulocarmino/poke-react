import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import PokeCard from "./PokeCard/pokeCard";
import Loading from "../Loading";

const PokeList = () => {
  const [initialData, setInitialData] = useState({ pokemons: [] });
  const [data, setData] = useState({ pokemons: [] });
  const [loading, setLoading] = useState({ isLoading: true });

  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://192.168.1.6:3333/pokemons");
      setInitialData({ pokemons: result.data });
      setData({ pokemons: result.data });
      setTimeout(() => {
        setLoading({ isLoading: false });
      }, 1000);
    }
    fetchData();
  }, []);

  const filterList = event => {
    let pokemonsFiltered = initialData.pokemons;
    pokemonsFiltered = pokemonsFiltered.filter(pokemon => pokemon.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
    setData({ pokemons: pokemonsFiltered });
  };

  if (loading.isLoading) {
    return (
      <>
        <InputSearch type="text" placeholder="Search pokemons..." disabled />
        <Loading />
      </>
    );
  }

  return (
    <>
      <InputSearch type="text" placeholder="Search pokemons..." onChange={filterList} />
      <Container>
        {data.pokemons.map((pokemon, i) => (
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
