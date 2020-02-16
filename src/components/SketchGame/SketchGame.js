import React, { useReducer, useState } from "react";

import { Logo } from "./components/Logo";

import { GameProvider } from "./providers";
import { pointReducer } from "./reducers";
import { useRounds } from "./hooks";

// styles
import "./SketchGame.css";
import "nes.css/css/nes.min.css";

export const SketchGame = ({ config }) => {

  const [ score, dispatch ] = useReducer(pointReducer, 0);
  const [ currentRound, setCurrentRound ] = useState(0);
    
  // this is used to determine the nature of the speech bubble in the next round,
  // ie, to taunt or congratulate!
  const [ wonLastRound, setWonLastRound ] = useState(false); 

  const state = {
    score,
    dispatch,
    currentRound,
    setCurrentRound,
    wonLastRound,
    setWonLastRound
  }

  // Note: can't pass these by context (useRounds isn't mounted and GameProvider context n/a yet):
  const { rounds } = useRounds({ ...config, currentRound });

  return(  
    <>
      <Logo />      
      <div className="nes-container is-rounded p-2" style={{ backgroundColor: "rgba(0,0,0,0)"}} >

        <GameProvider value={{ ...config, ...state }}>
          { rounds }
        </GameProvider>

      </div>
    </>
  );
}