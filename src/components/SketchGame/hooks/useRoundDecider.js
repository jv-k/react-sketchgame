import { useState, useCallback, useEffect } from "react";

import { useGameContext } from  ".";

import { getPrediction } from "utils";
import { GameSFX } from "../utils/sounds.js";

// returns an array collection of JSX round components
export const useRoundDecider = ({ canvasRef, label, stopTimer }) => {

  const [ isGameOver, setGameOver ] = useState(false);
  
  const { model, 
          labels, 
          currentRound, 
          setCurrentRound, 
          noRounds,
          score,
          dispatch
        } = useGameContext();

  const roundDecider = () => 
    (isGameOver) ? null :
      getPrediction(canvasRef, model).then(prediction => {
        console.log(label, labels[prediction[0]]);

        if (labels[prediction[0]] === label) { // SCORE!
          // TODO: GameContext->updateNextMessage – positively!
          dispatch({ type: "ADD_POINTS" });
          GameSFX.play("point_win");
        } else {
          // TODO: GameContext->updateNextMessage – sarcastically!
          GameSFX.play("point_lose");
        }
        
        if (currentRound < noRounds - 1) {
          // go to next round if it's not last round
          setCurrentRound(currentRound + 1);
        } else {
          // if last round, wrap it up!
          setGameOver(true);
          GameSFX.stop("theme"); // in case it's playing
          stopTimer(); 
          console.log("END GAME!");
        }
      });
  
  useEffect(() => {
    console.log("Score:", score);
  }, [currentRound, isGameOver]);

  return { roundDecider, isGameOver };
};
