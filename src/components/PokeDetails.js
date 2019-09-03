import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const PokeDetails = withRouter(({ match, history }) => {
  const [data, setData] = useState({ pokemon: {} });
  // const [loading, setLoading] = useState({ isLoading: true });

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        "http://10.61.217.146:3333/pokemon/" + match.params.id
      );

      setData({ pokemon: result.data });
      setTimeout(() => {
        // setLoading({ isLoading: false });
      }, 1000);
    }
    fetchData();
  }, [match.params.id]);

  const goBackToList = () => {
    history.push("/");
  };

  return (
    <Container>
      <button onClick={() => goBackToList()}>Voltar</button>
      {data.pokemon.name},{data.pokemon.img},{data.pokemon.specie}
    </Container>
  );
});

export default PokeDetails;

export const Container = styled.div``;
