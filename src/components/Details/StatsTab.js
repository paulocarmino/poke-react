import React from "react";
import styled from "styled-components";

import Types from "../Shared/Types/Types";

const StatsTab = ({ pokemon }) => {
  return (
    <StatsTabContainer>
      <h4>Basics Stats</h4>
      <p>Stats here!</p>
      <h4>Weaknesses</h4>
      <Types types={pokemon.weaknesses} />
      <h4>Strengths</h4>
      <Types types={pokemon.strengths} />
    </StatsTabContainer>
  );
};

export default StatsTab;

export const StatsTabContainer = styled.div`
  margin-top: 25px;
  color: #3b3b3b;

  h4 {
    margin: 15px 0px;
  }
`;
