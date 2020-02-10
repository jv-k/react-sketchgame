import React, { useEffect } from "react";
import { Button } from "components/SketchGame/components/Button";
import { Logo } from "components/SketchGame/components/Logo";
import { GameSFX } from "components/SketchGame/utils/sounds.js";

export const home = () => {
import { GameSFX } from "../../utils/sounds.js";
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
      // GameSFX.destroy();
    }

  });
  return (
    <>
      <div>home</div>
      <Button 
        route="/game"
        label="Play" 
      />
    </>
          click={() => {
            GameSFX.play("click");
            GameSFX.play("theme");
          }}
  );
}
