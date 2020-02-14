import React, { useEffect } from "react";

import { Logo } from "components/SketchGame/components/Logo";
import { Button } from "components/SketchGame/components/Button";
import { Checkbox } from "components/SketchGame/components/Checkbox/Checkbox";

import { useLocalStorage } from "components/SketchGame/hooks";

import { GameSFX } from "components/SketchGame/utils/sounds.js";

import Typed from 'typed.js';
const typedConfig = {
  typeSpeed: 20,
  backSpeed: 10,
  backDelay: 50,
  startDelay: 500
};

export const Home = () => {

  // save to local storage so that components that use SFX can respect the app setting:
  const [ soundOn, setSoundOn ] = useLocalStorage("soundOn");
   
  useEffect(() => {
    // mount:
    let typed = new Typed(
      '.typed-msg', 
      { ...typedConfig, stringsElement: ".typed-src" },
    );

    // cleanup:
    return () => {
      typed.destroy();
    }
  });

  return (
    <div className="h-100 d-flex align-items-center">
      <div className="container-sm">
        <Logo />
        <section className="message">
          <div 
            className="nes-balloon from-left d-block"
            style={{ minHeight: "4.3em" }}
          >
            <div className="typed-src d-none">
              <p>This game has been modeled on Google's <a href="https://quickdraw.withgoogle.com/data">Quick, Draw!</a>^2000</p>
              <p>^1000Brought to you by <span className="text-primary">@jvkdev</span> and <span className="text-danger">Super Mari</span>^500</p>
              <p>Brought to you by <span className="text-primary">@jvkdev</span> and <span className="text-danger">EPFL Extension School</span> <i className="nes-icon heart align-middle"></i></p>
            </div>
            <div><span className="typed-msg"></span></div>
          </div>
        </section>

        <i className="nes-octocat animate float-left"></i>
        <div className="float-right">
          <Checkbox 
            isChecked={ soundOn } 
            onChange={ 
              (checked) => setSoundOn(checked) 
            }/>
          <Button 
            route="/game"
            click={() => {
              GameSFX.play("click", soundOn);
              GameSFX.play("theme", soundOn);
            }}
            label="Play Game >" 
            className="mt-3"
            buttonClassName="is-success"
          />
        </div>
      </div>
    </div>
  );
}
