import React from "react";
import { Canvas } from "../Canvas";

export const AnswerCard = React.forwardRef((props, ref) => {
  return(
    <div className="nes-container is-rounded mb-3 p-0" style={{ width: "310px", height: "310px"}}>
      <Canvas ref={ ref } />
    </div>  
  );
});