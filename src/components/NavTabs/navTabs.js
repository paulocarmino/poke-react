import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem/navItem";

export const Container = styled.div`
  height: 30px;
  padding: 0 30px;
  display: flex;
`;

export default function NavTabs() {
  return (
    <Container>
      <NavItem className="active" active>
        Pokémon
      </NavItem>
      <NavItem>Items</NavItem>
      <NavItem>Gyms</NavItem>
      <NavItem>Characters</NavItem>
    </Container>
  );
}
