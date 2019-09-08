import React, { useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import debounce from "lodash/debounce";
import string from "lodash/string";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import PokeCard from "./PokeCard";
import Loading from "./Loading";
import Error from "../assets/error.svg";
import { ModalContext } from "../contexts/ModalContext";
import PokeDetails from "./PokeDetails";

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
  const [state, setState] = useContext(ModalContext);

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

  const toggleDrawer = () => {
    setState(state => ({ ...state, open: false }));
  };

  if (loading) return <Loading />;

  if (error)
    return (
      <ContainerError>
        <img src={Error} alt="Erro" width="300px" />
        <TitleError className="marginup">Error :(</TitleError>
      </ContainerError>
    );

  return (
    <>
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
      <SwipeableDrawerCustom
        disableBackdropTransition
        anchor="bottom"
        open={state.open}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
      >
        <DrawerContainer>
          <PokeDetails pokemonId={state.activePokemon._id} />
        </DrawerContainer>
      </SwipeableDrawerCustom>
    </>
  );
};

export default PokeList;

export const Container = styled.div`
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

export const SwipeableDrawerCustom = styled(SwipeableDrawer)`
  max-width: 395px;
`;

export const DrawerContainer = styled.div`
  width: 100%;
  ${media.greaterThan("medium")`
    max-width: 395px;
  `}
`;
