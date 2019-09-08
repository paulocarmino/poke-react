import React from "react";
import styled from "styled-components";

import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <Container>
      <h1>Pokedex</h1>
      <img src={Logo} alt="Logo"></img>
      <span>About this project</span>
    </Container>
  );
}

export const Container = styled.div`
  height: 60px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(229, 57, 53);
  background: linear-gradient(
    180deg,
    rgba(229, 57, 53, 1) 0%,
    rgba(227, 89, 87, 1) 100%
  );
  color: #fff;

  h1 {
    font-size: 24px;
  }

  span {
    font-size: 12px;
    letter-spacing: 1px;

    &:hover {
      font-size: 13px;
    }
  }
`;
