import React from "react";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";

import Types from "../Shared/Types/Types";

const StatsTab = ({ pokemon }) => {
  const normalise = value => ((value - 0) * 100) / (252 - 0);

  return (
    <StatsTabContainer>
      <h4>Basics Stats</h4>
      <StatField>
        <p>HP</p>
        <span>{pokemon.stats.hp}</span>
        <StatBar
          variant="determinate"
          width="100%"
          value={normalise(pokemon.stats.hp)}
          customcolor={pokemon.color}
        />
      </StatField>

      <StatField>
        <p>Atk</p>
        <span>{pokemon.stats.attack}</span>
        <StatBar
          variant="determinate"
          width="100%"
          value={normalise(pokemon.stats.attack)}
          customcolor={pokemon.color}
        />
      </StatField>

      <StatField>
        <p>Def</p>
        <span>{pokemon.stats.defense}</span>
        <StatBar
          variant="determinate"
          width="100%"
          value={normalise(pokemon.stats.defense)}
          customcolor={pokemon.color}
        />
      </StatField>

      <StatField>
        <p>SpAtk</p>
        <span>{pokemon.stats.specialAttack}</span>
        <StatBar
          variant="determinate"
          width="100%"
          value={normalise(pokemon.stats.specialAttack)}
          customcolor={pokemon.color}
        />
      </StatField>

      <StatField>
        <p>SpDef</p>
        <span>{pokemon.stats.specialDefense}</span>
        <StatBar
          variant="determinate"
          width="100%"
          value={normalise(pokemon.stats.specialDefense)}
          customcolor={pokemon.color}
        />
      </StatField>

      <StatField>
        <p>Speed</p>
        <span>{pokemon.stats.speed}</span>
        <StatBar
          variant="determinate"
          width="100%"
          value={normalise(pokemon.stats.speed)}
          customcolor={pokemon.color}
        />
      </StatField>

      <StatField>
        <p>Total</p>
        <span>{pokemon.stats.total}</span>
        {/* <SpanTotal>Others Pokemons with this total</SpanTotal> */}
      </StatField>

      <h4>Weaknesses</h4>
      <Types types={pokemon.weaknesses} />
      <h4>Strengths</h4>
      <Types types={pokemon.strengths} />
    </StatsTabContainer>
  );
};

export default StatsTab;

export const StatsTabContainer = styled.div`
  margin-top: 25px;
  color: #3b3b3b;

  h4 {
    margin: 15px 0px;
  }
`;

export const StatField = styled.div`
  display: flex;
  align-items: center;
  height: 24px;

  && {
    .MuiLinearProgress-root {
      background-color: #eaeaea;
    }
  }

  p {
    margin-right: 15px;
    font-weight: 500;
    min-width: 40px;
  }

  span {
    min-width: 30px;
  }
`;

export const StatBar = styled(LinearProgress)`
  width: 100%;
  margin-left: 10px;

  && {
    height: 7px;
    border-radius: 2px;
    .MuiLinearProgress-bar {
      background-color: ${props => props.customcolor};
    }
  }
`;

export const SpanTotal = styled.span`
  margin-left: 10px;
`;
