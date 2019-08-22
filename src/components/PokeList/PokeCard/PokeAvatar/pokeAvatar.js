import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  height: 88px;

  flex: 0 88px;

  img {
    border-radius: 5%;
  }
`;

export default function PokeAvatar() {
  return (
    <Container>
      <img
        src="https://api.adorable.io/avatars/88/abott@adorable.png"
        alt="Poke Avatar"
      />
    </Container>
  );
}
