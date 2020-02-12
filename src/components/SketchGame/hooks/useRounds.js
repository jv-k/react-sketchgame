import React, { useState } from "react";
import { GameRound } from  "../components/GameRound";

export const useRounds = ({ noRounds, labels, timeLimit }) => {
  
  const [ hidden, setHidden ] = useState([]);

  const rounds = Array.apply(null, { length: noRounds }).map(
    (round, index) => {  
      return hidden.includes(index) ? null : (
        <GameRound
          index={ index } key={ index }
          timeLimit={ timeLimit }
          label={ labels[index] }
          hideRound={() => {
            setHidden([...hidden, index]);
          }}
        />
      )
    }
  );

  const roundsToGo = noRounds - hidden.length;

  const unhideAllRounds = () => setHidden([])

  return { rounds, roundsToGo, unhideAllRounds };
}