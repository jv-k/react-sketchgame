import React from "react";
import { useGameContext, useRoundContext } from "../../hooks";

export const StatusCard = () => {

  const gameState = useGameContext();
  const roundState = useRoundContext();
  
  const timeSize = 100 - Math.round((gameState.timeLimit - roundState.timeLeft) / gameState.timeLimit * 100);

  return(
    <div className="nes-container is-centered is-rounded mb-3">
      <p className="">Round { roundState.index + 1 } of { gameState.noRounds }</p>
      <progress 
        // make the progress bar red if timer > 80%  
        className={ 
          "m-0 nes-progress "
           + (() => {
              if (timeSize === 100) return "is-pattern is-faded"
              else if (timeSize < 20) return "is-error"
              else return "is-success"
           })()
        } 
        value={ timeSize } 
        max="100" 
        style={{ height: "28px" }}
      />
    </div>
  );
}
