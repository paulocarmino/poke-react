import React, { useContext } from "react";
import styled from "styled-components";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { QuestionCircle } from "styled-icons/fa-regular/QuestionCircle";
import { Search } from "styled-icons/fa-solid/Search";

import { GlobalContext } from "../contexts/GlobalContext";
import Pokeball from "../assets/pokeball.svg";
import Pokedex from "../assets/pokedex.png";

const HideOnScroll = props => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default function Header(props) {
  const [state, setState] = useContext(GlobalContext);

  const openAbout = () => {
    setState(state => ({ ...state, aboutIsOpen: true }));
  };

  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Container>
          <LogoContainer>
            {/* <img src={Logo} alt="Logo"></img>
            <h1>Pokedex</h1> */}
            <img
              src={Pokeball}
              alt="Pokedex Logo"
              width="40px"
              height="40px"
            ></img>
            <img src={Pokedex} alt="Pokedex Logo" height="41px"></img>
          </LogoContainer>
          <NavContainer>
            <IconButtonCustom>
              <SearchWhite size="20" title="Back" />
            </IconButtonCustom>
            <IconButtonCustom onClick={openAbout}>
              <QuestionWhite size="22" title="Back" />
            </IconButtonCustom>
          </NavContainer>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export const Container = styled.div`
  height: 60px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(229, 57, 53);
  background: linear-gradient(
    180deg,
    rgba(229, 57, 53, 1) 0%,
    rgba(227, 89, 87, 1) 100%
  );
  color: #fff;

  h1 {
    font-size: 24px;
  }

  span {
    font-size: 12px;
    letter-spacing: 1px;

    &:hover {
      font-size: 13px;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
`;

export const LogoContainer = styled.div`
  display: flex;
  img {
    margin-right: 10px;
  }
`;

export const IconButtonCustom = styled(IconButton)`
  padding: 6px;
`;

export const SearchWhite = styled(Search)`
  color: #fff;
`;

export const QuestionWhite = styled(QuestionCircle)`
  color: #fff;
`;
