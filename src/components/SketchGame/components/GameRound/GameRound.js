import React, { useEffect } from "react";

import { RoundProvider } from "../../providers";

import { useRoundDecider } from "../../hooks";
import { useTimer } from  "../../hooks";

import { Controls }  from "../Controls";
import { ScoreCard } from  "../ScoreCard";
import { AnswerCard } from "../AnswerCard";
import { QuestionCard } from "../QuestionCard";

import { Redirect } from "react-router-dom";

let canvasRef = React.createRef();

export const GameRound = ({ index, label, timeLimit }) => {
 
  // set-up timer
  const { timeLeft, startTimer, stopTimer } = useTimer(
    timeLimit, 
    () => roundDecider() // callback for when timer is done 
  );

  const { roundDecider, isGameOver } = useRoundDecider({ label, canvasRef, stopTimer });

  const renderRedirect = () => {
    if (isGameOver) return <Redirect to='/results' />;    
  }
  
  useEffect(() => {
    startTimer();        

    return () => { // cleanup:
      stopTimer(); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RoundProvider value={{ index, label, timeLeft, canvasRef }}>
      { renderRedirect() }
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
