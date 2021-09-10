import React, { useEffect } from "react";

import { Button } from "components/SketchGame/components/Button";
import { Logo } from "components/SketchGame/components/Logo";

import { useLocalStorage } from "components/SketchGame/hooks";
import { GameSFX } from "components/SketchGame/utils/sounds.js";

import Typed from 'typed.js';
const typedConfig = {
  typeSpeed: 20,
  startDelay: 500
};

export const Result = (props) => {

  const { score, noRounds, msgs } = props.location.state;
  const [ soundOn ] = useLocalStorage("soundOn");

  // Set all the scores
  const scoreFactored = Math.round(score / noRounds * 10);
  
  let wonPerfect = false;
  let wonHigh = false;
  let wonLow = false;
  let loseLow = false;
  // let loseHigh = false;

  if (scoreFactored === 10) wonPerfect = true
  else if (scoreFactored >= 8) wonHigh = true
  else if (scoreFactored >= 6) wonLow = true
  // else if (scoreFactored >= 4) loseHigh = true
  else loseLow = true;

  const msg = (() => {
    if (wonPerfect) return msgs.win.perfect
    else if (wonHigh) return msgs.win.high
    else if (wonLow) return msgs.win.low
    else if (loseLow) return msgs.lose.low.replace("{{score}}", scoreFactored)
    else return msgs.lose.high; // Loseerrrrrr with big L
  })();

  useEffect(() => {
    let soundFX = "";
    if (wonHigh || wonLow || wonPerfect)
      soundFX = msgs.win.sound
    else 
      soundFX = msgs.lose.sound;
      
    setTimeout(() =>
      GameSFX.play(soundFX, soundOn)
    , 1000);

    // mount:
    let typed = new Typed(
      '.typed-msg', {
        ...typedConfig, 
        strings: [msg]
      },
    );

    // cleanup:
    return () => {
      typed.destroy();
    }
  }, [msg, msgs.lose.sound, msgs.win.sound, soundOn, wonHigh, wonLow, wonPerfect]);  
  
  return (
    <div className="h-100 d-flex align-items-center">
      <div className="container-sm">
        <Logo />
        <div className="nes-container is-rounded p-2" style={{ backgroundColor: "rgba(0,0,0,0)", minHeight: "10em"}}>
          <div className="row align-content-center justify-content-center m-4" style={{ height:"6em" }}>
            <div className="nes-container is-rounded">
              <div className="row align-items-center">
                <Icon {...{ wonHigh, wonLow, wonPerfect }}/>
                <div className="col" style={{whiteSpace: "nowrap"}}>
                  <Rating {...{ scoreFactored }}/>
                </div>
                <div className="col">
                  <h5 className="text-info pt-1">Score:</h5> 
                  <h5 className="">{ score } / { noRounds}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-sm-0 col-md-4 col-lg-6"></div>
            <div className="col-sm   col-md-8 col-lg-6">
              <section className="message">
                <div 
                  className="nes-balloon from-right d-block"
                  style={{ minHeight: "4.3em" }} 
                >
                  <div><span className="typed-msg"></span></div>
                </div>
              </section>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col">
              <div className="float-left pt-4">
                <Button 
                  route="/game"
                  label="Play Again" 
                />
                <Button 
                  route="/home"
                  label="Home" 
                />
              </div>
            </div>
            <div className="col">
              <i className="nes-charmander float-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// too minor to be in it's own file
const Rating = ({ scoreFactored }) => {
  const star_lookup = [
    "t.t.t.t.t",//0
    "h.t.t.t.t",//1
    "f.t.t.t.t",//2
    "f.h.t.t.t",//3
    "f.f.t.t.t",//4
    "f.f.h.t.t",//5
    "f.f.f.t.t",//6
    "f.f.f.h.t",//7
    "f.f.f.f.t",//8
    "f.f.f.f.h",//9
    "f.f.f.f.f"//10
  ];
  const stars = {
    f: <i className="nes-icon star" />,
    h: <i className="nes-icon star is-half" />,
    t: <i className="nes-icon star is-transparent" />
  };
  return star_lookup[scoreFactored].split('.').map((lookup, index) => {
    return <span key={ index }>{ stars[lookup] }</span>;
  });
}

// too minor to be in it's own file
const Icon = ({ wonPerfect, wonHigh, wonLow }) => {
  if(wonPerfect || wonHigh) 
    return(
      <div className="col" style={{}}>
        <i className="nes-icon trophy is-large"></i>
      </div>
    )
  else if (wonLow) 
    return (
      <div className="col" style={{}}>
        <i className="nes-icon coin is-large"></i>
      </div>
    )
  else return null;
  /*
    else if (loseHigh) 
    return <i className="nes-icon like is-large reflect-v"></i>
  else 
    return <i className="nes-icon like is-large reflect-v"></i>
  */
};