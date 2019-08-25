import React from "react";
import styled from "styled-components";

import ItemAvatar from "./ItemAvatar";
import ItemInfo from "./ItemInfo";

export default function ItemCard({ item }) {
  return (
    <Container>
      <ItemAvatar avatar={item.thumb} />
      <ItemInfo item={item} />
    </Container>
  );
}

export const Container = styled.div`
  height: 100px;

  display: flex;
  align-items: center;
`;
