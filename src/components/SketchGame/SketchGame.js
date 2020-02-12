import React from "react";
import { Logo } from "./components/Logo";
import { Controls } from "./components/Controls";

import { GameProvider } from "./providers";
import { gameReducer }  from "./reducers";

import "./SketchGame.css";
import "nes.css/css/nes.min.css";

// let ref = React.createRef();


        <GameProvider value={{ ...config, state, dispatch, model, curCanvasRef, setCurCanvasRef }}>
          { rounds }
          <Controls />
        </GameProvider>

      </div>
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
            <ScoreCard />
            <Controls />
          </div>
        </div>
      </>
    );
  }
}

export { SketchGame };