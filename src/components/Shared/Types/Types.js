import React from "react";
import styled from "styled-components";

const Types = ({ types, small }) => {
  return (
    <TypesContainer small={small}>
      {types.map((type, i) => (
        <Label key={i} type={type} small={small}>
          {type}
        </Label>
      ))}
    </TypesContainer>
  );
};

export default Types;

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;

  ${({ small }) =>
    small &&
    `
    flex-direction: column;
    margin-top: 0px;
  `}
`;

export const Label = styled.label`
  width: 66px;
  margin-bottom: 4px;
  padding: 4px 6px;
  border-radius: 6px;
  text-align: center;
  font-size: 0.8rem;
  color: #fff;

  ${({ small }) =>
    small &&
    `
    width: 52px;
    padding: 2px 6px;
    border-radius: 5px;
    font-size: 0.65rem;
  `}

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
    ${({ small }) =>
      small &&
      `
      margin-left: 0px;
    `}
  }

`;
