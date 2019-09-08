import React from "react";
import styled from "styled-components";

import ErrorImage from "../../assets/error.svg";

const Error = () => {
  return (
    <ContainerError>
      <img src={ErrorImage} alt="Erro" width="300px" />
      <TitleError className="marginup">Error :(</TitleError>
    </ContainerError>
  );
};

export default Error;

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
`;

export const TitleError = styled.h1`
  margin-top: 40px;
`;
