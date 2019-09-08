import React from "react";
import styled from "styled-components";

import Tabs from "./Tabs";

const DetailsTabs = () => {
  return (
    <DetailsTabsContainer>
      <TabsContainer>
        <Tabs active>About</Tabs>
        <Tabs>Stats</Tabs>
        <Tabs>Evolution</Tabs>
      </TabsContainer>
    </DetailsTabsContainer>
  );
};

export default DetailsTabs;

export const DetailsTabsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  margin-top: -40px;
  padding-top: 40px;
  background-color: #fff;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

export const TabsContainer = styled.ul`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
`;
