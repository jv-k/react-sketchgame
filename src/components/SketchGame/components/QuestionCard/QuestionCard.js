import React, { useEffect } from "react";

import Typed from 'typed.js';
const typedConfig = {
  typeSpeed: 20,
  backSpeed: 10,
  backDelay: 50,
  startDelay: 500
};

export const QuestionCard = ({ label, timeLeft }) => {

  const ref = React.createRef();

  useEffect(() => {
    let typed = new Typed(  
      '.msgTxt',
      { 
        strings: [ getQuestion(label, timeLeft, ref) ], 
        ...typedConfig,
        onComplete: (self) => {
        }
        onComplete: (self) => { 
          // tell GameRound provider to start the timer when text typing is done:
          this.props.callBack();
        } 
      }
    );

    // cleanup:
    return () => {
      typed.destroy();
    }
  }, []);
 
  return(
    <>
      <div className="nes-balloon from-right w-100 mt-1">
          <span className="msgTxt"></span>
      </div>
      <i className="nes-mario reflect-h float-right"></i>
    </>
  );
}

function getQuestion(label, timeLeft, ref) {
  return "Can you draw a <span class=\"text-danger\">"+label+"</span>..? " 
  + "^1000<br/>You have <span class=\"text-danger\" ref=\"" + ref + "\">" + timeLeft +"</span> seconds to draw it in the box. ^1000GO!";  
}
