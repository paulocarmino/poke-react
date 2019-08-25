import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  margin-right: 10px;

  p {
    font-size: 0.9rem;
    font-weight: bold;
    color: #c9c9c9;
    cursor: pointer;
  }

  p > a.active {
    color: #333;
    border-bottom: 3px solid #333;
  }
`;

export default function NavItem(props) {
  return (
    <Container>
      <p>{props.children}</p>
    </Container>
  );
}
