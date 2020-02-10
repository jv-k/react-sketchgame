import React from "react";
import { Button } from "../../components/shared/Button.js";

export const home = () => {
import { GameSFX } from "../../utils/sounds.js";
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
