import React from "react";
import { SketchGame } from "components/SketchGame";
import { SketchGameConfig } from "components/SketchGame/SketchGame.config.js";

export const Game = () => {  
  return (
    <div className="h-100 d-flex align-items-center">
      <div className="container-sm">        
        <SketchGame { ...SketchGameConfig } />
      </div>
    </div>
  );
}
