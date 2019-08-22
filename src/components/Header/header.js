import React from "react";
import styled from "styled-components";

import HeaderTabs from "./headerTabs";

export const Container = styled.div``;

export default function Header() {
  return (
    <Container>
      <HeaderTabs />
    </Container>
  );
}
