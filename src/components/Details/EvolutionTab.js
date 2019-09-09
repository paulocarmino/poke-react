import React from "react";
import styled from "styled-components";

import Types from "../Shared/Types/Types";

const EvolutionTab = ({ pokemon }) => {
  return (
    <EvolutionTabContainer>
      <h4>Evolution</h4>
      <p>Soon!</p>
    </EvolutionTabContainer>
  );
};

export default EvolutionTab;

export const EvolutionTabContainer = styled.div`
  margin-top: 25px;
  color: #3b3b3b;

  h4 {
    margin: 15px 0px;
  }
`;
