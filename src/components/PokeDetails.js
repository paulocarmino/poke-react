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
    <Container color={data.pokemon.color}>
      <Header>
        <LeftSide>
          <HeaderPokerInfo>
            <p className="number">#{data.pokemon.number}</p>
            <p className="name">{data.pokemon.name}</p>
            <p className="specie">{data.pokemon.specie}</p>
            <TypesList>
              {data.pokemon &&
                data.pokemon.types.map((type, i) => (
                  <Label key={i} type={type}>
                    {type}
                  </Label>
                ))}
            </TypesList>
          </HeaderPokerInfo>
        </LeftSide>
        <RightSide>
          <img src={data.pokemon.img} alt={data.pokemon.name}></img>
        </RightSide>
        {/* <button onClick={() => goBackToList()}>Voltar</button> */}
        {/* {data.pokemon.name},{data.pokemon.img},{data.pokemon.specie} */}
      </Header>
      <PokeInfoDetails>
        <TabsContainer>
          <Tabs color={data.pokemon.color} active>
            About
          </Tabs>
          <Tabs>Stat</Tabs>
          <Tabs>Evolution</Tabs>
        </TabsContainer>
      </PokeInfoDetails>
    </Container>
  );
});

export default PokeDetails;

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.color ? props.color : "white")};
  filter: saturate(1.2);
`;

export const Header = styled.div`
  display: flex;
  height: 220px;
  padding-top: 30px;
  padding-bottom: 20px;
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
  padding-right: 30px;

  img {
    height: 120px;
  }
`;

export const HeaderPokerInfo = styled.div`
  padding: 0px 30px;
  color: #fff;

  .number {
    font-size: 15px;
    font-weight: 500;
  }

  .specie {
    font-weight: 200;
    font-size: 14px;
  }

  .name {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const TypesList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const Label = styled.label`
  width: 66px;
  margin-bottom: 4px;
  padding: 4px 6px;
  border-radius: 25px;
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
  background: ${props => {
    switch (props.type) {
      case "Grass":
        return "#278600";
      case "Poison":
        return "#410084";
      case "Fire":
        return "#ff8504";
      case "Flying":
        return "#6e7ce3";
      case "Water":
        return "#00a9d9";
      case "Bug":
        return "#404040";
      case "Ground":
        return "#7b693b";
      case "Fighting":
        return "#b70000";
      case "Electric":
        return "#215bff";
      case "Psychic":
        return "#aab300";
      case "Fairy":
        return "#df44ce";
      default:
        return "#c9c9c9";
    }
  }};
`;

export const PokeInfoDetails = styled.div`
  width: 100%;
  height: 600px;
  margin-top: -50px;
  padding-top: 40px;
  background-color: #fff;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

export const TabsContainer = styled.ul`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
`;

export const Tabs = styled.li`
  /* display: flex; */
  /* height: 40px; */
  /* width: 100%; */
  border-bottom: ${props => (props.active ? "2px solid" + props.color : "")};
  padding: 15px 0px;
  text-align: center;
  flex: 1;
  font-weight: ${props => (props.active ? "600" : "")};
`;
