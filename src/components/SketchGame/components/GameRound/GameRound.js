import React, { useEffect } from "react";

import { RoundProvider } from "../../providers";
import { useGameContext } from  "../../hooks";
import { useTimer } from  "../../hooks";

import { Controls }  from "../Controls";
import { ScoreCard } from  "../ScoreCard";
import { AnswerCard } from "../AnswerCard";
import { QuestionCard } from "../QuestionCard";

let canvasRef = React.createRef();

export const GameRound = ({ index, label, hideRound, timeLimit }) => {

  // set-up timer
  const { timeLeft, startTimer, stopTimer } = useTimer(
    timeLimit, 
    ()=>{  // callback for when timer is done
      console.log("TIMER DONE!");
    }
  );

  // this is for the control button in the GameContext
  const { setCurCanvasRef } = useGameContext();

  useEffect(() => {
    setCurCanvasRef(canvasRef);
    startTimer();        
    return () => stopTimer(); // cleanup:
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RoundProvider value={{ index, label, timeLeft, canvasRef }}>
      <div className="row">
        <div className="col">
          <ScoreCard />
        </div>
      </div>

      <div className="row align-items-end">  
        <div className="col">          
          <AnswerCard ref={ canvasRef } />
        </div>
        <div className="col mr-3 mb-2">
          <QuestionCard 
            label={ label }
            timeLeft={ timeLeft }
          />
        </div>
      </div>
      <Controls canvasRef={ canvasRef } nextRound={ roundDecider }/>
    </RoundProvider>      
  );
};
