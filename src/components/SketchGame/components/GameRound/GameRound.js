import React, { useEffect, useState } from "react";

import { RoundProvider } from "../../providers";

import { useRoundDecider } from "../../hooks";
import { useTimer } from  "../../hooks";

import { StatusCard } from  "../StatusCard";
import { AnswerCard } from "../AnswerCard";
import { QuestionCard } from "../QuestionCard";
import { Controls }  from "../Controls";

import { Redirect } from "react-router-dom";

let canvasRef = React.createRef();

export const GameRound = ({ index, currentLabel, timeLimit }) => {
 
  // this is set to true when typing animation is complete:
  // reset upon each round, as previous round sets it to `true`
  const [ startTiming, setStartTiming ] = useState(false);  

  // set-up timer:
  const { timeLeft, startTimer, stopTimer } = useTimer( 
    timeLimit, 
    // callback for when timer is done – does all the HEAVY lifting
    // NB: can be invoked prematurely via 'next' button
    () => roundDecider()
  );
  const { roundDecider, isGameOver } = useRoundDecider({ currentLabel, canvasRef, stopTimer });

  const renderRedirect = () => {
    if (isGameOver) 
      return <Redirect to='/results' />;    
  }
  
  useEffect(() => {
    if (startTiming) {
      startTimer();
      console.log("GR: startTiming!");
    }
    return () => { stopTimer() };
  }, [startTiming]);

  return (
    <RoundProvider value={{ index, currentLabel, timeLeft, canvasRef }}>
      { renderRedirect() }
      <div className="row">
        <div className="col">
          <StatusCard />
        </div>
      </div>
      <div className="row align-items-end">  
        <div className="col">          
          <AnswerCard ref={ canvasRef } />
        </div>
        <div className="col mr-3 mb-2">
          {/* this component's class-based, so can't use 2 contexts - so forced to supply these props w/refactoring */}
          <QuestionCard 
            label={ currentLabel } 
            timeLeft={ timeLeft } 
            callBack={ ()=> setStartTiming(true) }
          />
        </div>
      </div>
      <Controls canvasRef={ canvasRef } NextBtnCallBack={ roundDecider }/>
    </RoundProvider>      
  );
};
