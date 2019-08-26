import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: center;
    padding: 0px 38px;
    margin-top: 20px;
  }
`;

export default function Header() {
  return (
    <Container>
      <h1>What Pokemon are you looking for?</h1>
    </Container>
  );
}
