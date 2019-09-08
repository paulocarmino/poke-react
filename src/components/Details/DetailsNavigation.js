import React, { useContext } from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";

import { GlobalContext } from "../../contexts/GlobalContext";

const DetailsNavigation = () => {
  const [state, setState] = useContext(GlobalContext);

  const toggleDrawer = () => {
    setState(state => ({
      ...state,
      detailsIsOpen: false
    }));
  };

  return (
    <NavigationContainer>
      <IconButtonCustom onClick={toggleDrawer}>
        <ArrowDownWhite size="30" title="Back" />
      </IconButtonCustom>
      <PokemonNavigationContainer>
        <IconButtonCustom>
          <ArrowBeforeWhite
            size="30"
            title="Previous Pokemon"
            number={state.activePokemon.number}
          />
        </IconButtonCustom>
        <IconButtonCustom>
          <ArrowNextWhite
            size="30"
            title="Next Pokemon"
            number={state.activePokemon.number}
          />
        </IconButtonCustom>
      </PokemonNavigationContainer>
    </NavigationContainer>
  );
};

export default DetailsNavigation;

export const NavigationContainer = styled.div`
  padding-left: 20px;
  padding-top: 16px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
`;

export const PokemonNavigationContainer = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
`;

export const IconButtonCustom = styled(IconButton)`
  &.MuiButtonBase-root {
    padding: 4px;
  }
`;

export const ArrowDownWhite = styled(KeyboardArrowDown)`
  color: #fff;
  cursor: pointer;
`;

export const ArrowBeforeWhite = styled(NavigateBefore)`
  color: ${props => (props.number !== "#001" ? "#fff" : "#ffffff3b")};
  cursor: pointer;
`;

export const ArrowNextWhite = styled(NavigateNext)`
  color: ${props => (props.number !== "#100" ? "#fff" : "#ffffff3b")};
  cursor: pointer;
`;
