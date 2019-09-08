import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";

import { GlobalContext } from "../contexts/GlobalContext";

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

const PokeDetails = ({ pokemonId }) => {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: {
      id: pokemonId
    }
  });

  // eslint-disable-next-line
  const [state, setState] = useContext(GlobalContext);

  const toggleDrawer = () => {
    setState(state => ({
      ...state,
      detailsIsOpen: false
    }));
  };

  if (loading) return <div>Loading</div>;

  if (error) return <div>Error!</div>;

  return (
    <Container color={data.pokemon.color}>
      <NavContainer>
        <IconButtonCustom onClick={toggleDrawer}>
          <ArrowDownWhite size="30" title="Back" />
        </IconButtonCustom>
        <NavigationContainer>
          <IconButtonCustom>
            <ArrowBeforeWhite
              size="30"
              title="Previous Pokemon"
              number={data.pokemon.number}
            />
          </IconButtonCustom>
          <IconButtonCustom>
            <ArrowNextWhite
              size="30"
              title="Next Pokemon"
              number={data.pokemon.number}
            />
          </IconButtonCustom>
        </NavigationContainer>
      </NavContainer>
      <Header>
        <LeftSide>
          <HeaderPokerInfo>
            <p className="number">{data.pokemon.number}</p>
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
      </Header>
      <PokeInfoDetails>
        <TabsContainer>
          <Tabs color={data.pokemon.color} active>
            About
          </Tabs>
          <Tabs>Stat</Tabs>
          <Tabs>Evolution</Tabs>
        </TabsContainer>
        <PokeInfoData>
          <h4>Description</h4>
          {data.pokemon.description}
        </PokeInfoData>
      </PokeInfoDetails>
    </Container>
  );
};

export default PokeDetails;

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.color ? props.color : "white")};
`;

export const Header = styled.div`
  display: flex;
  height: 186px;
  padding-top: 24px;
  padding-bottom: 20px;
`;

export const NavContainer = styled.div`
  padding-left: 20px;
  padding-top: 16px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
`;

export const NavigationContainer = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
`;

export const IconButtonCustom = styled(IconButton)`
  &.MuiButtonBase-root {
    padding: 4px;
  }
`;

export const ArrowDownWhite = styled(KeyboardArrowDown)`
  color: #fff;
  cursor: pointer;
`;

export const ArrowBeforeWhite = styled(NavigateBefore)`
  color: ${props => (props.number !== "#001" ? "#fff" : "#ffffff3b")};
  cursor: pointer;
`;

export const ArrowNextWhite = styled(NavigateNext)`
  color: ${props => (props.number !== "#100" ? "#fff" : "#ffffff3b")};
  cursor: pointer;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 50px;
  flex: 1;
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 20px;
  z-index: 1;

  img {
    height: 160px;
    width: 170px;
    filter: saturate(1.6);
  }
`;

export const HeaderPokerInfo = styled.div`
  padding-left: 30px;
  color: #fff;
  position: relative;
  z-index: 1;

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

export const Ball = styled.div`
  position: absolute;
  height: 500px;
  width: 550px;
  top: 0px;
  left: -88px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: -1;
  overflow: auto;
`;

export const TypesList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const Label = styled.label`
  width: 66px;
  margin-bottom: 4px;
  padding: 4px 6px;
  border-radius: 6px;
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

  & + label {
    margin-left: 6px;
  }
`;

export const PokeInfoDetails = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  margin-top: -40px;
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
  flex: 1;
  padding: 15px 0px;
  border-bottom: ${props => (props.active ? "2px solid" : "")};
  border-color: ${props => props.color};
  font-weight: ${props => (props.active ? "600" : "")};
  text-align: center;
  cursor: pointer;
`;

export const PokeInfoData = styled.div`
  margin-top: 20px;
  padding: 0px 30px;

  h4 {
    margin-bottom: 5px;
    color: #333;
  }
`;
