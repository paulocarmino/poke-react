import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const GET_POKEMON = gql`
  query Pokemons($id: ID) {
    pokemon(where: { _id: $id }) {
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

const PokeDetails = withRouter(({ match, history }) => {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: {
      id: match.params.id
    }
  });

  const goBackToList = () => {
    history.push("/");
  };

  if (loading) return <div>Loading</div>;

  if (error) return <div>Error!</div>;

  return (
    <Container>
      <Header color={data.pokemon.color}>
        <LeftSide></LeftSide>
        <RightSide>
          <img src={data.pokemon.img} alt={data.pokemon.name}></img>
        </RightSide>
        {/* <button onClick={() => goBackToList()}>Voltar</button> */}
        {/* {data.pokemon.name},{data.pokemon.img},{data.pokemon.specie} */}
      </Header>
    </Container>
  );
});

export default PokeDetails;

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  height: 300px;
  padding-top: 30px;
  background-color: ${props => (props.color ? props.color : "white")};
`;

export const LeftSide = styled.div`
  /* border: 1px solid #000; */
  flex: 1;
`;

export const RightSide = styled.div`
  display: flex;
  /* border: 1px solid #000; */
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 20px;

  img {
    height: 120px;
  }
`;
