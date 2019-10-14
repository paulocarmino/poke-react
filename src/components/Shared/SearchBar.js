import React, { useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import debounce from "lodash/debounce";
import string from "lodash/string";

import { GlobalContext } from "../../contexts/GlobalContext";

const SearchBar = () => {
  // eslint-disable-next-line
  const [state, setState] = useContext(GlobalContext);

  const filterList = e => {
    const nameFilter = string.capitalize(e.target.value);
    handleFilter(nameFilter);
  };

  const handleFilter = debounce(nameFilter => {
    setState(state => ({ ...state, searchTerm: nameFilter }));
  }, 250);

  return (
    <SearchBarContainer>
      <InputSearch
        onChange={filterList}
        type="text"
        placeholder="Search pokemons by name..."
      />
    </SearchBarContainer>
  );
};

export default SearchBar;

export const SearchBarContainer = styled.div`
  width: 100%;
  ${media.greaterThan("medium")`
    width: unset;
  `}
`;

export const InputSearch = styled.input`
  max-width: 310px;
  width: 100%;
  background-color: #e6e6e6;
  border: none;
  border-radius: 6px;
  height: 32px;
  margin: 10px 0px;
  padding: 0px 10px;
  font-size: 0.8rem;

  ${media.greaterThan("medium")`
    width: 310px;
  `}
`;
