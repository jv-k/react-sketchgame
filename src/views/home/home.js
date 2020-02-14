import React, { useEffect } from "react";
import { Button } from "components/SketchGame/components/Button";
import { Logo } from "components/SketchGame/components/Logo";
import { GameSFX } from "components/SketchGame/utils/sounds.js";

import Typed from 'typed.js';
const typedConfig = {
  typeSpeed: 20,
  backSpeed: 10,
  backDelay: 50,
  startDelay: 500
};

export const Home = () => {

  // using useEffect from the router, seems it's the reason the linter doesn't 
  // think this fn isn't React – hacky fix for now:
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
        <Button 
          route="/game" 
          click={() => {
            GameSFX.play("click");
            GameSFX.play("theme");
          }}
          label="Play Game >" 
          className="float-right mt-3"
          buttonClassName="is-success"
        />

      </div>
    </div>
  );
}
