import React from "react";
import { Logo } from "./components/Logo";
import { Controls } from "./components/Controls";

import { GameProvider } from "./providers";

import "./SketchGame.css";
import "nes.css/css/nes.min.css";

// let ref = React.createRef();

const ScoreCard = (props) => {
  return(
    <div className="nes-container is-centered is-rounded mb-3">
      <p className="">Round 1 of 10</p>
      <progress className="m-0 nes-progress is-success" value="20" max="100" style={{height: "1em"}}></progress>
    </div>
  );
}

const AnswerCard = (props) => {
  return(
    <div className="nes-container is-rounded mb-3" style={{ width: "300px", height: "300px"}}></div>  
  );
}

const QuestionCard = (props) => {
  return(
    <>
      <div className="nes-balloon from-left text-left mt-1">
        <p className="msgTxt">Game text,ß play it Game text, play it Game text, play it !</p>
      </div>
      <i className="nes-mario"></i>
    </>
  );
}

class SketchGame extends React.Component {

  render() {  
    return(  
      <>
        <Logo />      
        <div className="nes-container is-rounded" style={{ backgroundColor: "rgba(0,0,0,0)"}} >
          <div className="row">
            <div className="col">
              <ScoreCard />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <AnswerCard />
            </div>
            <div className="col">
              <QuestionCard />
            </div>
          </div>
          
          <div className="row">
            <Controls />
          </div>
        </div>
      </>
    );
  }
}

export { SketchGame };