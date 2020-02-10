import React from "react";
import { SketchGame } from "components/SketchGame";

// load data
// import { loadModel, loadLabels } from  "../../utils";
// const model = loadModel("./model/model.json");
// const labels = require("./labels.json");

export const game = () => {
  return (
    <div className="h-100 d-flex align-items-center">
      <div className="container-sm">        
        {/* Load data and pass config to game */}
        <SketchGame />
      </div>
    </div>
  );
}
