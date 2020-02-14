import React from "react";
import { Button } from "../Button";
import { clearCanvas } from "../Canvas";
import { GameSFX } from "../../utils/sounds.js";

import { useLocalStorage } from "../../hooks";

export const Controls = ({ canvasRef, NextBtnCallBack }) => {

  const [ soundOn ] = useLocalStorage("soundOn");

  return(
    <div className="row">
      <div className="col">
      <Button 
          label="Clear" 
          click={() => { 
            clearCanvas(canvasRef);
            GameSFX.play("clear", soundOn);
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
          label="Quit" 
          click={() => {
            GameSFX.play("click", soundOn);
            document.getElementById('dialog-rounded').showModal();
          }}
          className="float-right"
        />  
        <dialog className="nes-dialog is-rounded" id="dialog-rounded">
          <form method="dialog">
            <p>Are you sure?!</p>
            <menu className="dialog-menu">
              <Button 
                label="Quit!"
                route="/home"
                className="nes-btn is-primary"
                click={() => { 
                  GameSFX.silence();
                  GameSFX.play("quit", soundOn);
                }}
              />
              <button className="nes-btn">Cancel</button>
            </menu>
          </form>
        </dialog>        
      </div>
    </div>
  );
}