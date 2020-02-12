import React from "react";
import { useGameContext, useRoundContext } from "../../hooks";

export const ScoreCard = () => {

  const gameState = useGameContext();
  const roundState = useRoundContext();
  
  const timeSize = Math.round((gameState.timeLimit - roundState.timeLeft) / gameState.timeLimit * 100);

  return(
    <div className="nes-container is-centered is-rounded mb-3">
      <p className="">Round { roundState.index + 1 } of { gameState.noRounds }</p>
      <progress 
        // make the progress bar red if timer > 80%  
        className={ "m-0 nes-progress" + (timeSize > 80 ? " is-error" : " is-success") } 
        value={ timeSize } max="100" style={{height: "1em"}}></progress>
    </div>
  );
}
