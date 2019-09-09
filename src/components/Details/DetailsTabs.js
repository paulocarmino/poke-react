import React, { useContext } from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { GlobalContext } from "../../contexts/GlobalContext";

const DetailsTabs = () => {
  const [value, setValue] = React.useState(0);
  const [state, setState] = useContext(GlobalContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <DetailsTabsContainer>
      <TabsContainer
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        color={state.activePokemon.color}
      >
        <TabCustom label="About" />
        <TabCustom label="Stats" />
        <TabCustom label="Evolution" />
      </TabsContainer>
      <TabsContentContainer>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <div value={value} index={0}>
            Item One
          </div>
          <div value={value} index={1}>
            Item Two
          </div>
          <div value={value} index={2}>
            Item Three
          </div>
        </SwipeableViews>
      </TabsContentContainer>
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

export const TabsContentContainer = styled.div`
  .react-swipeable-view-container {
    min-height: 200px;
  }
`;

export const TabsContainer = styled(Tabs)`
  && {
    .MuiTabs-indicator {
      background-color: ${props => props.color};
    }
  }
`;

export const TabCustom = styled(Tab)`
  && {
    text-transform: none;
  }
`;
