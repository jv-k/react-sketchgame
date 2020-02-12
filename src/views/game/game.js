import React from "react";
import { SketchGame } from "components/SketchGame";

// load data
import { loadModel } from "utils";

const model = loadModel("./model/model.json");
const initialState = {
  config: {
    labels: require("labels.json"),
    noRounds: 1,
    timeLimit: 10 // seconds
  }
};

export const game = () => {
  return (
    <div className="h-100 d-flex align-items-center">
      <div className="container-sm">        
        <SketchGame { ...initialState} model={ model }/>
      </div>
    </div>
  );
}
