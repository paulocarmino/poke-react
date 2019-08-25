import React from "react";
import styled from "styled-components";

export default function ItemAvatar({ avatar }) {
  const itemAvatar = avatar ? avatar : "";
  return <Container>{<img src={itemAvatar} alt="Item Thumb" />}</Container>;
}

export const Container = styled.div`
  height: 88px;
  flex: 0 88px;
  border-radius: 5%;
  border: 1px solid #c9c9c9;
  display: flex;
  padding: 20px;

  img {
    height: 100%;
    width: 100%;
  }
`;
