import React from "react";
import { GameRound } from  "../components/GameRound";
import { arrayShuffle } from "utils";

// returns an array collection of JSX round components
export function useRounds({ currentRound, noRounds, timeLimit, labels, randomiseLabels }) {
  
  // Memoize label so that randomisation doesn't re-occur per round. This was a nice solution.
  // Because: change of state in ancestor's context triggers re-render to all child components as mention in:
  // https://reactjs.org/docs/hooks-reference.html#usecontext
  const labelsShuffled = React.useMemo(() => {
    return (randomiseLabels) ? arrayShuffle(labels.slice()) : labels;
  },[]);

  let rounds = Array.apply(null, { length: noRounds });
  rounds = rounds.map((round, index) => {  
    // only make visible the currentRound
    return (currentRound === index) ? (
      <GameRound
        index={ index } key={ index }
        timeLimit={ timeLimit }
        currentLabel={ labelsShuffled[index] }
      />
    ) : null
  });

  return { rounds };
}
