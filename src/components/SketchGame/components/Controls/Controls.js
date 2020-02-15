import React from "react";
import { withRouter } from 'react-router-dom' 

import { Button } from "../Button";
import { clearCanvas } from "../Canvas";
import { GameSFX } from "../../utils/sounds.js";

import { useLocalStorage } from "../../hooks";

 export const Controls = withRouter((props) => {

  const [ soundOn ] = useLocalStorage("soundOn");

  return(
    <div className="row">
      <div className="col">
      <Button 
          label="Clear" 
          click={() => { 
            clearCanvas(props.canvasRef);
            GameSFX.play("clear", soundOn);
          }} 
          className="is-warning"
        /> 
        <Button 
          label="Next >" 
          click={() => props.NextBtnCallBack() } 
          className="is-success"
        /> 
      </div>
      <div className="col"> 
        <Button 
          label="Quit" 
          click={() => {
            GameSFX.play("click", soundOn);
            var dialog = document.getElementById('dialog-rounded');
            if (dialog.showModal !== undefined)
              dialog.showModal()
            else 
              props.history.push('/');
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
});