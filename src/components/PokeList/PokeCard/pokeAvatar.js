import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  height: 88px;

  flex: 0 88px;

  img {
    border-radius: 5%;
    // background-color: ${props => (props.color ? props.color : "white")};
    height: 100%;
    width: 100%;
    padding: 5px;
  }
`;

export default function PokeAvatar({ avatar, color }) {
  const pokeAvatar = avatar ? avatar : "";
  return <Container color={color}>{<img src={pokeAvatar} alt="Poke Avatar" />}</Container>;
}
