import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 88px;

  flex: 0 88px;

  img {
    border-radius: 5%;
  }
`;

export default function PokeAvatar({ avatar }) {
  const pokeAvatar = avatar ? avatar.front_default : '';
  return <Container>{<img src={pokeAvatar} alt="Poke Avatar" />}</Container>;
}
