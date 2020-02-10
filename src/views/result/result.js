import React from "react";
import { Button } from "components/SketchGame/components/Button";

export const result = () => {
  return (
    <>
      <div>result</div>
      <Button 
        route="/game"
        label="Play Again" 
      />
      <Button 
        route="/home"
        label="Home" 
      />
    </>  );
}
