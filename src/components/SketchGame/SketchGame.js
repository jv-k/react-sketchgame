import React, { useReducer, useState } from "react";

import { Logo }      from "./components/Logo";

import { GameProvider } from "./providers";
import { pointReducer }  from "./reducers";
import { useRounds } from "./hooks";

// styles
import "./SketchGame.css";
import "nes.css/css/nes.min.css";

export const SketchGame = ({ config }) => {

  const [ score, dispatch ] = useReducer(pointReducer, 0);
  const [ currentRound, setCurrentRound ] = useState(0);
 
  // TODO: 
  // can't pass these by context (useRounds isn't mounted and context isn't present yet
  // in this document – note: it would work if SketchGame was wrapper in a Provider
  // from an outside wrapper component) so have to use arguments
  const { rounds } = useRounds({ ...config, currentRound, setCurrentRound });

  return(  
    <>
      <Logo />      
      <div className="nes-container is-rounded p-2" style={{ backgroundColor: "rgba(0,0,0,0)"}} >

        <GameProvider value={{
          ...config, 
          score,
          dispatch, 
          model,
          currentRound, 
          setCurrentRound           
        }}>
          { rounds }
        </GameProvider>

      </div>
    </>
  );
}
