import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../contexts/GlobalContext";

const TabItem = props => {
  // eslint-disable-next-line
  const [state, setState] = useContext(GlobalContext);

  return (
    <TabItemContainer color={state.activePokemon.color} active={props.active}>
      {props.children}
    </TabItemContainer>
  );
};

export default TabItem;

export const TabItemContainer = styled.li`
  flex: 1;
  padding: 15px 0px;
  border-bottom: ${props => (props.active ? "2px solid" : "")};
  border-color: ${props => props.color};
  font-weight: ${props => (props.active ? "600" : "")};
  text-align: center;
  cursor: pointer;
`;
