import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../contexts/GlobalContext";

const DetailsHeader = () => {
  // eslint-disable-next-line
  const [state, setState] = useContext(GlobalContext);

  return (
    <HeaderContainer>
      <LeftSide>
        <HeaderPokerInfo>
          <p className="number">{state.activePokemon.number}</p>
          <p className="name">{state.activePokemon.name}</p>
          <p className="specie">{state.activePokemon.specie}</p>
          <TypesList>
            {state.activePokemon &&
              state.activePokemon.types.map((type, i) => (
                <Label key={i} type={type}>
                  {type}
                </Label>
              ))}
          </TypesList>
        </HeaderPokerInfo>
      </LeftSide>
      <RightSide>
        <img src={state.activePokemon.img} alt={state.activePokemon.name}></img>
      </RightSide>
    </HeaderContainer>
  );
};

export default DetailsHeader;

export const HeaderContainer = styled.div`
  display: flex;
  height: 186px;
  padding-top: 24px;
  padding-bottom: 20px;
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
