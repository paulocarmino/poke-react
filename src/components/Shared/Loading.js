import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const PokeCardLoader = () => (
  <ContentLoader
    height={115}
    width={167}
    speed={0.5}
    primaryColor="#f0f0f0"
    secondaryColor="#d0d0d0"
  >
    <rect x="0" y="0" rx="5" ry="5" width="167" height="115" />
  </ContentLoader>
);

const SearchBarLoader = () => (
  <ContentLoader
    height={32}
    width={345}
    speed={0.5}
    primaryColor="#f0f0f0"
    secondaryColor="#d0d0d0"
  >
    <rect x="0" y="0" rx="15" ry="15" width="345" height="32" />
  </ContentLoader>
);

export default function Loading() {
  return (
    <>
      <SearchBarContainerLoader>
        <SearchBarLoader />
      </SearchBarContainerLoader>
      <PokeListContainerLoader>
        <PokeCardLoader />
        <PokeCardLoader />
        <PokeCardLoader />
        <PokeCardLoader />
        <PokeCardLoader />
        <PokeCardLoader />
        <PokeCardLoader />
        <PokeCardLoader />
        <PokeCardLoader />
        <PokeCardLoader />
      </PokeListContainerLoader>
    </>
  );
}

export const PokeListContainerLoader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 15px;
  grid-gap: 10px;
`;

export const SearchBarContainerLoader = styled.div`
  margin: 20px 15px;
`;
