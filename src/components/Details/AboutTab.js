import React from "react";
import styled from "styled-components";

const AboutTab = ({ pokemon }) => {
  return (
    <AboutTabContainer>
      <h4>Description</h4>
      <Text>{pokemon.description}</Text>
      <h4>Details</h4>
      <DetailLine>
        <DetailTitle>Specie</DetailTitle>
        <DetailText>{pokemon.specie}</DetailText>
      </DetailLine>
      <DetailLine>
        <DetailTitle>Height</DetailTitle>
        <DetailText>{pokemon.height}</DetailText>
      </DetailLine>
      <DetailLine>
        <DetailTitle>Weight</DetailTitle>
        <DetailText>{pokemon.weight}</DetailText>
      </DetailLine>
      <DetailLine>
        <DetailTitle>Abilities</DetailTitle>
        <DetailText></DetailText>
      </DetailLine>
      <h4>Breeding</h4>
      <DetailLine>
        <DetailTitle>Gender</DetailTitle>
        <DetailText></DetailText>
      </DetailLine>
      <DetailLine>
        <DetailTitle>Egg Groups</DetailTitle>
        <DetailText></DetailText>
      </DetailLine>
      <DetailLine>
        <DetailTitle>Egg Cycle</DetailTitle>
        <DetailText></DetailText>
      </DetailLine>
    </AboutTabContainer>
  );
};

export default AboutTab;

export const AboutTabContainer = styled.div`
  margin-top: 25px;
  color: #3b3b3b;

  h4 {
    margin: 15px 0px;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;
  font-size: 13px;
`;

export const DetailLine = styled.div`
  display: flex;
  padding: 4px 0px;
`;

export const DetailTitle = styled.p`
  color: #909090;
  min-width: 100px;
`;

export const DetailText = styled.p``;
