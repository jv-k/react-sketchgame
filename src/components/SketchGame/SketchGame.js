import React, { useEffect, useState } from "react";

import "./SketchGame.css";
import "./hooks";

import { loadModel, loadLabels } from  "../../utils";

// load data
const model = loadModel("./model/model.json");
const labels = require("./labels.json");

// let ref = React.createRef();

// config options

class SketchGame extends React.Component {

  render() {  
    return(  
      <>

      </>
    );
  }

}

export default SketchGame;