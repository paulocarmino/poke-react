import React, { useContext } from "react";
import styled from "styled-components";

import CardThumb from "./CardThumb";
import CardInfo from "./CardInfo";

import { GlobalContext } from "../../contexts/GlobalContext";

const Card = ({ pokemon, id }) => {
  // eslint-disable-next-line
  const [state, setState] = useContext(GlobalContext);

  return (
    <>
      <Container
        color={pokemon.color}
        onClick={() =>
          setState(state => ({
            ...state,
            detailsIsOpen: true,
            activePokemon: pokemon,
            indexActivePokemon: id
          }))
        }
      >
        <CardInfo pokemon={pokemon} id={id} />
        <CardThumb avatar={pokemon.img} />
      </Container>
    </>
  );
};

export default Card;

export const Container = styled.div`
  height: 115px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${props =>
    props.color === "rgb(240, 240, 240)" ? "rgb(10, 220, 240)" : props.color};
  z-index: 1;
  right: -50px;
  cursor: pointer;
  filter: saturate(1.8);
`;
