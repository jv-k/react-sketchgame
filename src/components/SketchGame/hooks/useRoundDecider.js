import { useState, useEffect } from "react";

import { useGameContext } from  ".";
import { useLocalStorage } from ".";

import { getPrediction } from "utils";
import { GameSFX } from "../utils/sounds.js";

// This fn performs the ML prediction and determines success + failure
export const useRoundDecider = ({ canvasRef, currentLabel, stopTimer }) => {

  const [ isGameOver, setGameOver ] = useState(false);
  const [ soundOn ] = useLocalStorage("soundOn");
   
  const { 
    model, 
    labels, 
    currentRound, 
    setCurrentRound, 
    noRounds,
    score,
    dispatch,
    setWonLastRound
  } = useGameContext();

  const finalRound = currentRound === noRounds;

  const roundDecider = () => 
    (isGameOver) ? null :
      getPrediction(canvasRef, model).then(prediction => {
        console.log("expectation: " + currentLabel, "VS prediction: " + labels[prediction[0]]);

        if (labels[prediction[0]] === currentLabel) { 
          // WON ROUND!
          dispatch({ type: "ADD_POINTS" });
          setWonLastRound(true);
          if (!finalRound) GameSFX.play("point_win", soundOn);
        } else {
          // LOST ROUND!
          setWonLastRound(false);
          if (!finalRound) GameSFX.play("point_lose", soundOn);
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
    console.log("Score:", score, "/", noRounds);
  }, [currentRound, isGameOver]);

  return { roundDecider, isGameOver };
};
