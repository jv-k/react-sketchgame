import React from "react";
import { Button } from "../Button";
import { GameSFX } from "../../utils/sounds.js";

export const Controls = () => {
  return(
    <div className="row">
      <div className="col">
        <Button 
          label="Clear" 
          click={() => { 
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