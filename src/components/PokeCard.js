import React, { useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import PokeAvatar from "./PokeAvatar";
import PokeInfo from "./PokeInfo";

import { ModalContext } from "../contexts/ModalContext";

const PokeCard = withRouter(({ pokemon, id, history }) => {
  // const goToPokemonDetails = id => {
  //   // console.log(history);
  //   history.push("pokemon/" + pokemon._id);
  //   console.log("Clicked Pokemon: " + id);
  // };

  const [state, setState] = useContext(ModalContext);

  return (
    <>
      <Container
        color={pokemon.color}
        onClick={() =>
          setState(state => ({
            ...state,
            open: true,
            activePokemon: pokemon
          }))
        }
      >
        <PokeInfo pokemon={pokemon} id={id} />
        <PokeAvatar avatar={pokemon.img} />
      </Container>
    </>
  );
});

export default PokeCard;

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
`;
