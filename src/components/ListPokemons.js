import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { useQuery } from "@apollo/react-hooks";
import { Waypoint } from "react-waypoint";

import GET_ALL_POKEMONS from "../graphql/GetAllPokemons";
import Card from "./Card/Card";
import Error from "../components/Shared/Error";

const ListPokemons = () => {
  const { error, data, fetchMore } = useQuery(GET_ALL_POKEMONS);

  if (error) return <Error />;

  return (
    <ListPokemonsContainer>
      {data &&
        data.pokemons.map((pokemon, i) => (
          <div key={pokemon._id}>
            <Card pokemon={pokemon} id={i} />
            {i === data.pokemons.length - 10 && (
              <Waypoint
                onEnter={() => {
                  fetchMore({
                    variables: {
                      skip: data.pokemons.length
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      if (!prev) return;

                      return Object.assign({}, prev, {
                        pokemons: [
                          ...prev.pokemons,
                          ...fetchMoreResult.pokemons
                        ]
                      });
                    }
                  });
                }}
              />
            )}
          </div>
        ))}
    </ListPokemonsContainer>
  );
};

export default ListPokemons;

export const ListPokemonsContainer = styled.div`
  /* overflow: auto; */
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  margin: 10px 0px;

  ${media.greaterThan("medium")`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin: 10px 0px;
  `}
`;
