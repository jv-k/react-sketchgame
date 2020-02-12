import React from "react";
import { Canvas } from "../Canvas";

export const AnswerCard = React.forwardRef((props, ref) => {

  return(
    <div className="nes-container is-rounded mb-3 p-0" style={{ width: "100%", height: "100%"}}>
      <Canvas ref={ ref } />
    </div>  
  );
});