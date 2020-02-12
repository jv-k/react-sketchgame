import React from "react";
import { GameRound } from  "../components/GameRound";

// returns an array collection of JSX round components
export const useRounds = ({ currentRound, noRounds, labels, timeLimit }) => {
    
  let rounds = Array.apply(null, { length: noRounds });

  rounds = rounds.map((round, index) => {  
    // only make visible the currentRound
    return (currentRound === index) ? (
      <GameRound
        index={ index } key={ index }
        timeLimit={ timeLimit }
        label={ labels[index] }
      />
    ) : null
  });

  return { rounds };
}