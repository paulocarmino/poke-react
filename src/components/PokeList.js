import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import debounce from "lodash/debounce";
import string from "lodash/string";

import Header from "./Header";
import PokeCard from "./PokeCard";
import Loading from "./Loading";
import Error from "../assets/error.svg";

const GET_ALL_POKEMONS = gql`
  query Pokemons($name: String) {
    pokemons(where: { name_contains: $name }) {
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

const PokeList = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_POKEMONS);
  // const pokemons = data.pokemons;

  const filterList = e => {
    const nameFilter = string.capitalize(e.target.value);
    handleFilter(nameFilter);
  };

  const handleFilter = debounce(nameFilter => {
    fetchMore({
      variables: {
        name: nameFilter
      },
      updateQuery: (prev, { fetchMoreResult, ...rest }) => {
        if (!fetchMoreResult) return prev;
        console.log(prev, fetchMoreResult);
        return {
          ...fetchMoreResult,
          pokemonsList: {
            ...fetchMoreResult.pokemons,
            pokemonsList: [...prev.pokemons, ...fetchMoreResult.pokemons]
          }
        };
      }
    });
  }, 250);

  if (loading)
    return (
      <>
        <Header />
        <InputSearch
          type="text"
          placeholder="Search pokemons by name..."
          disabled
        />
        <Loading />
      </>
    );

  if (error)
    return (
      <>
        <Header />
        <InputSearch
          type="text"
          placeholder="Search pokemons by name..."
          disabled
        />
        <ContainerError>
          <img src={Error} alt="Erro" width="300px" />
          <TitleError className="marginup">Error :(</TitleError>
        </ContainerError>
      </>
    );

  return (
    <>
      <Header />
      <InputSearch
        type="text"
        placeholder="Search pokemons by name..."
        onChange={filterList}
      />
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
