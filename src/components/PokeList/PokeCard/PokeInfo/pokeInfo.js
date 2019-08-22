import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 88px;
  padding: 5px 5px 5px 15px;

  flex: 1;

  h3 {
    font-size: 1rem;
  }

  h3 span {
    color: #c9c9c9;
  }

  p {
    margin-top: 8px;
    font-size: 0.7rem;
    text-align: justify;
  }
`;

export const Label = styled.label`
  padding: 2px 6px;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 0.6rem;
  color: #fff;
  background: ${props => (props.color ? props.color : "#c9c9c9")};

  & + label {
    margin-left: 8px;
  }
`;

export default function PokeInfo() {
  return (
    <Container>
      <h3>
        <span>#001</span> Bulbasaur
      </h3>
      <Label color="#6DB067">Grass</Label>
      <Label color="#927ABB">Grass</Label>
      <p>
        Bulbassaur can be seen napping in bright sunlight. There is a seed on
        its back...
      </p>
    </Container>
  );
}
