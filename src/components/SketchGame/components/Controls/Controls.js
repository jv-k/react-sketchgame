import React from "react";
import { Button } from "../Button";
import { clearCanvas } from "../Canvas";
import { GameSFX } from "../../utils/sounds.js";

export const Controls = ({ canvasRef, NextBtnCallBack }) => {

  return(
    <div className="row">
      <div className="col">
      <Button 
          label="Clear" 
          click={() => { 
            clearCanvas(canvasRef);
            GameSFX.play("clear");
          }} 
          className="is-warning"
        /> 
        <Button 
          label="Next >" 
          click={() => NextBtnCallBack() } 
          className="is-success"
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