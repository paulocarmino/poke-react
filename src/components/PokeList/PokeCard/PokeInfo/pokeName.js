import React from "react";
import styled from "styled-components";

export const First = styled.div`
  text-transform: uppercase;
  display: inline;
`;

const PokeInfo = ({ name }) => (
  <>
    <First>{name[0]}</First>
    {name.slice(1)}
  </>
);

export default PokeInfo;
