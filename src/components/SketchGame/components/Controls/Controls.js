import React from "react";
import { Button } from "../Button";
import { clearCanvas } from "../Canvas";
import { GameSFX } from "../../utils/sounds.js";
import { useGameContext } from  "../../hooks";

export const Controls = () => {

  const { curCanvasRef } = useGameContext();
  
  return(
    <div className="row">
      <div className="col">
      <Button 
          label="Clear" 
          click={() => { 
            clearCanvas(curCanvasRef);
            GameSFX.play("clear");
          }} 
          className="is-warning"
        /> 
      </div>
      <div className="col"> 
        <Button 
          label="Quit!" 
          route="/home" 
          click={() => { 
            GameSFX.silence();
            GameSFX.play("quit");
          }}
          className="float-right"
        />  
      </div>
    </div>
  );
}