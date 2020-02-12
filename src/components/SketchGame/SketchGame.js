import React, { useReducer, useState } from "react";

import { Logo }      from "./components/Logo";

import { GameProvider } from "./providers";
import { pointReducer }  from "./reducers";
import { useRounds } from "./hooks";

// styles
import "./SketchGame.css";
import "nes.css/css/nes.min.css";

export const SketchGame = ({ config, model }) => {

  const initialConfig = {
    score: 0,
    labels: config.labels, // we'll randomize this later, so it should be in state
    currentRound: 1
  }
  const [ state, dispatch ] = useReducer(gameReducer, { ...initialConfig });
  
  // In my implementation there's only one clear canvas btn as opposed to one
  // for each round container, which makes life harder when it comes to clearing the canvas,
  // (for practice!). So the following is the way I used to tell the GameContext
  // what the current visible canvas ref is for this purpose:
  const [ curCanvasRef, setCurCanvasRef ] = useState({});

  console.log("ROOT");
 
  // TODO: 
  // – start game method
  // – reset game method
  const { rounds } = useRounds({ ...config });

  return(  
    <>
      <Logo />      
      <div className="nes-container is-rounded p-2" style={{ backgroundColor: "rgba(0,0,0,0)"}} >

        <GameProvider value={{ ...config, state, dispatch, model, curCanvasRef, setCurCanvasRef }}>
          { rounds }
        </GameProvider>

      </div>
    </>
  );
}
