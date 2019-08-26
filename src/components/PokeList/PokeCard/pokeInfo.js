import React from 'react';
import styled from 'styled-components';

export default function PokeInfo({ pokemon }) {
  return (
    <Container>
      <PokeBasicInfo>
        <span>#{pokemon.number}</span>
        <h3>{pokemon.name}</h3>
      </PokeBasicInfo>
      <TypesList>
        {pokemon &&
          pokemon.types.map((type, i) => <Label key={i}>{type}</Label>)}
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
    font-size: 0.7rem;
    color: #fff;
  }

  h3 {
    font-size: 1rem;
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
  width: 45px;
  margin-bottom: 4px;
  padding: 2px 6px;
  border-radius: 25px;
  text-align: center;
  font-size: 0.6rem;
  color: #fff;
  background: ${props => (props.color ? props.color : '#c9c9c9')};
`;
