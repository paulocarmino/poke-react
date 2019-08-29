import React from "react";
import { Query } from "react-apollo";
// import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ContentLoader from "react-content-loader";

import styled from "styled-components";

import PokeCard from "./PokeCard/pokeCard";
import Error from "../../assets/error.svg";

const query = gql`
  {
    pokemons {
      id
      number
      name
      description
      img
      color
      types
    }
  }
`;

const MyLoader = () => (
  <ContentLoader
    height={100}
    width={400}
    speed={2}
    primaryColor="#e1e1e1"
    secondaryColor="#d6d6d6"
    style={{ marginBottom: 0, marginTop: 0 }}
  >
    <rect x="32" y="0" rx="5" ry="5" width="100" height="80" />
    <rect x="150" y="2" rx="5" ry="5" width="150" height="10" />
    <rect x="150" y="18" rx="5" ry="5" width="90" height="10" />
    <rect x="150" y="38" rx="2" ry="2" width="200" height="6" />
    <rect x="150" y="48" rx="2" ry="2" width="200" height="6" />
    <rect x="150" y="58" rx="2" ry="2" width="200" height="6" />
    <rect x="150" y="68" rx="2" ry="2" width="130" height="6" />
  </ContentLoader>
);

class PokeList extends React.Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          let pokemons = data.pokemons;

          const filterList = event => {
            const pokemonsFiltered = pokemons.filter(pokemon => pokemon.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
            console.log(pokemonsFiltered);
          };

          if (loading)
            return (
              <ContainerLoading>
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
              </ContainerLoading>
            );

          if (error)
            return (
              <ContainerError>
                <img src={Error} alt="Erro" width="300px" />
                <TitleError className="marginup">Error :(</TitleError>
              </ContainerError>
            );

          return (
            <>
              <input type="text" placeholder="Search" onChange={filterList} />
              <Container>
                {pokemons.map((pokemon, i) => (
                  <PokeCard key={pokemon.id} pokemon={pokemon} id={i} />
                ))}
              </Container>
            </>
          );
        }}
      </Query>
    );
  }
}

export default PokeList;

export const Container = styled.div`
  // height: calc(100% - 90px);
  overflow-y: hidden;
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
