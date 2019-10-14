import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { useScrollTrigger } from "@material-ui/core";
import { QuestionCircle } from "styled-icons/fa-regular/QuestionCircle";
import { Search } from "styled-icons/fa-solid/Search";

import SearchBar from "../components/Shared/SearchBar";

import Pokeball from "../assets/pokeball.svg";

export default function Header(props) {
  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }

  return (
    <ElevationScroll {...props}>
      <AppBar>
        <Container>
          <LogoContainer>
            <div>
              <img
                src={Pokeball}
                alt="Pokedex Logo"
                width="40px"
                height="40px"
              ></img>
            </div>
            <SearchBar />
          </LogoContainer>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

export const Container = styled.div`
  display: flex;
  height: 60px;
  padding: 0px 15px;
  align-items: center;
  background: #fff;
  color: #000;

  ${media.greaterThan("medium")`
    height: 55px;
  `}

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
  width: 100%;
  align-items: center;
  justify-content: center;
  img {
    display: block;
    margin-right: 15px;
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
