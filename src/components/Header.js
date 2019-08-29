import React from "react";
import styled from "styled-components";

import Logo from "../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  h1 {
    text-align: center;
    padding: 0px 38px;
    margin: 15px 0px;
  }
`;

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo"></img>
      <h1>What Pokemon are you looking for?</h1>
    </Container>
  );
}
