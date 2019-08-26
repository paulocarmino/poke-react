import React from "react";
import styled from "styled-components";

export default function PokeInfo({ pokemon }) {
  return (
    <Container>
      {/* <span>#{pokemon.number}</span> */}
      <h3>{pokemon.name}</h3>
      {pokemon && pokemon.types.map((type, i) => <Label key={i}>{type}</Label>)}
      {/* <p>{pokemon.description}</p> */}
    </Container>
  );
}

export const Container = styled.div`
  width: 88px;
  padding: 5px 5px 5px 15px;

  flex: 1;

  span {
    font-size: 0.8rem;
    color: #8e8e8e;
    font-weight: 600;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  p {
    margin-top: 8px;
    font-size: 0.7rem;
    text-align: justify;
    position: relative;
    overflow: hidden;
    height: 3.6em;
  }

  p:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 35%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
  }
`;

export const Label = styled.label`
  margin-top: 10px;
  padding: 2px 6px;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #fff;
  background: ${props => (props.color ? props.color : "#c9c9c9")};

  & + label {
    margin-left: 8px;
  }
`;
