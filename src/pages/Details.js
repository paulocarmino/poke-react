import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../contexts/GlobalContext";
import DetailsNavigation from "../components/Details/DetailsNavigation";
import DetailsHeader from "../components/Details/DetailsHeader";
import DetailsTabs from "../components/Details/DetailsTabs";

const Details = () => {
  // eslint-disable-next-line
  const [state, setState] = useContext(GlobalContext);

  return (
    <DetailsContainer color={state.activePokemon.color}>
      <DetailsNavigation />
      <DetailsHeader />
      <DetailsTabs />
    </DetailsContainer>
  );
};

export default Details;

export const DetailsContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.color ? props.color : "white")};
`;
