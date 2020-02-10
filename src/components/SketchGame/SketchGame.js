import React from "react";
import { Logo } from "./components/Logo";
import { Controls } from "./components/Controls";

import { useSketchGame } from "./hooks";

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

export { SketchGame };