import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 88px;

  position: relative;

  img {
    position: absolute;
    right: -5px;
    bottom: -5px;
    height: 100%;
    width: 100%;
  }
`;

export const Ball = styled.div`
  position: absolute;
  height: 150px;
  width: 150px;
  bottom: -65px;
  right: -60px;

  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  z-index: -1;
`;

export default function PokeAvatar({ avatar }) {
  const pokeAvatar = avatar ? avatar : '';
  return (
    <Container>
      {<img src={pokeAvatar} alt="Poke Avatar" />}
      <Ball />
    </Container>
  );
}
