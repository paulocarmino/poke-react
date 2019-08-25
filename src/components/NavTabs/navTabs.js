import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import NavItem from "./navItem";

export const Container = styled.div`
  height: 30px;
  padding: 0 30px;
  display: flex;
`;

export const LinkCustom = styled(NavLink)`
  color: #333;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function NavTabs() {
  return (
    <Container>
      <NavItem active>
        <LinkCustom exact={true} activeClassName="active" to="/">
          Pokémon
        </LinkCustom>
      </NavItem>

      <NavItem>
        <LinkCustom activeClassName="active" to="/items">
          Items
        </LinkCustom>
      </NavItem>

      <NavItem>Gyms</NavItem>
      <NavItem>Characters</NavItem>
    </Container>
  );
}
