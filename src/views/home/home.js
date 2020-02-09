import React from "react";
import { Button } from "../../components/shared/Button.js";

export const home = () => {
  return (
    <>
      <div>home</div>
      <Button 
        route="/game"
        label="Play" 
      />
    </>
  );
}
