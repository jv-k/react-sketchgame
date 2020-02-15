import React from "react";
import { GameContext } from "../../providers";
import { getRandomNumber } from "../../utils";

import Typed from 'typed.js';

export class QuestionCard extends React.Component {

  static contextType = GameContext;

  constructor(props) {
    super();
    this.state = {
      timeRef: React.createRef(),
      isTyped: false
    }
    this.typed = {};
  }

  getQuestion = () => {
    const { wonLastRound } = this.context;
    const msgs = this.context.msgs;
    const isFirstRound = (this.context.currentRound === 0);

    const intro = (() => {
      if (isFirstRound) 
        return msgs.intro
      else if (wonLastRound) 
        return msgs.pointScore[getRandomNumber(msgs.pointScore.length)]
      else
        return msgs.pointLose[getRandomNumber(msgs.pointLose.length)]
    })();

    return  intro 
          + msgs.pause 
          + msgs.question
            .replace("{{label}}", this.props.label)
            .replace("{{timeLeft}}", this.props.timeLeft)
          + (isFirstRound ? msgs.questionSuffix : "!");
  }

  componentDidUpdate() {
    // since the element is inside the typed element, we can only perfectly
    // reference it directly via DOM (easiest method I found):
    const el = document.getElementById("timeLeft");
    if (el !== null) el.innerText = this.props.timeLeft;
  }
  
  componentDidMount() {
    const typedConfig = { typeSpeed: 20 };
    
    // start text animation
    this.typed = new Typed(  
      '.msgTxt', { 
        strings: [
          this.getQuestion()
        ], 
        ...typedConfig, 
        onComplete: (self) => { 
          // tell GameRound provider to start the timer when text typing is done:
          this.props.callBack();
        } 
      }
    );
  }

  componentWillUnmount() {
    this.typed.destroy();
  }
      
  render() {
    return(
      <>
        <div className="nes-balloon from-right w-100 mt-1">
            <span className="msgTxt"></span>
        </div>
        <i className="nes-mario reflect-h float-right"></i>
      </>
    )
  }
}

