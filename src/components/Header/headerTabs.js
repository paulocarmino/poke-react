import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  padding: 0 30px;

  display: flex;

  p {
    margin-right: 14px;
    font-size: 2rem;
    font-weight: bold;
    color: #c9c9c9;
    cursor: pointer;
  }

  p.active {
    color: #333;
  }
`;

export default function HeaderTabs() {
  return (
    <Container>
      <p className="active">All</p>
      <p>Favourites</p>
    </Container>
  );
}
