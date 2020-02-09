import React from "react";
import { Button } from "../../components/shared/Button.js";

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
  );
}
