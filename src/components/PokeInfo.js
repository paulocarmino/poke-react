import React from "react";
import styled from "styled-components";

export default function PokeInfo({ pokemon }) {
  return (
    <Container>
      <PokeBasicInfo>
        <span>#{pokemon.number}</span>
        <h3>{pokemon.name}</h3>
      </PokeBasicInfo>
      <TypesList>
        {pokemon &&
          pokemon.types.map((type, i) => (
            <Label key={i} type={type}>
              {type}
            </Label>
          ))}
      </TypesList>
    </Container>
  );
}

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 0.6rem;
    color: #fff;
  }

  h3 {
    font-size: 0.9rem;
    margin-bottom: 5px;
    color: #fff;
  }
`;

export const TypesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokeBasicInfo = styled.div``;

export const Label = styled.label`
  width: 52px;
  margin-bottom: 4px;
  padding: 2px 6px;
  border-radius: 25px;
  text-align: center;
  font-size: 0.65rem;
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
