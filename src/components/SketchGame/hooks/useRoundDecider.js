import { useState, useCallback, useEffect } from "react";

import { useGameContext } from  ".";

import { getPrediction } from "utils";
import { GameSFX } from "../utils/sounds.js";

// This fn performs the ML prediction and determines success + failure
export const useRoundDecider = ({ canvasRef, currentLabel, stopTimer }) => {

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
        console.log("expectation: " + currentLabel, "VS prediction: " + labels[prediction[0]]);
console.log(labels);
        if (labels[prediction[0]] === currentLabel) { 
          // WON ROUND!
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
