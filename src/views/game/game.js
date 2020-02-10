import React from "react";
import { Button } from "../../components/shared/Button.js";
import { SketchGame } from "components/SketchGame";

import { GameSFX } from "../../utils/sounds.js";

export const game = () => {
  return (
    <>
      <div>game</div>
      <Button 
        route="/home"
        label="Home" 
      />  
      <Button 
        click={() => {
          console.log('clear clicked');
        }}
        label="Clear" 
      />  
    </>  
                click={() => { 
                  GameSFX.play("clear");
                }} 
                click={() => { 
                  GameSFX.silence();
                  GameSFX.play("quit");
                }}
  );
}
