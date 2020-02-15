// just a wrapper around Tone.js for playing sfx
import * as Tone from "tone";

const GameSFXConfig = {
  path: "/assets/sounds/",
  sfx: {
    click: "btn.wav",
    clear: "clear.wav",
    game_lose:  "game_lose.wav",
    game_win:   "game_win.wav",
    point_win: "point_win.wav", 
    point_lose: "point_lose.wav", 
    time_tick: "time_seconds.wav", 
    time_warn: "time_warning.wav",
    theme: "theme.wav",
    quit:  "point_lose.wav"
  }
}

class SFXPlayer {
  constructor(cfg){
    // load sounds
    this.sfx = {};
    Object.keys(cfg.sfx).map((id) =>
      this.sfx[id] = new Tone.Player(cfg.path + cfg.sfx[id]).toMaster()
    );
  }

  play = (id, soundOn) => {
    if (soundOn) {
      if (this.sfx[id].loaded) {
        this.sfx[id].start();
      } else {
        Tone.Buffer.on("load", () => {
          this.sfx[id].start();
        });
      }
      console.log("SFX: ", id);
    }
  }

  stop = (id) => {
    this.sfx[id].stop();    
  }

  silence = () => {
    Object.keys(this.sfx).map((id) =>
      this.sfx[id].stop()
    );
  }

  destroy = () => {
    Object.keys(this.sfx).map((id) =>
      this.sfx[id].dispose()
    );
  }
}

export const GameSFX = new SFXPlayer(GameSFXConfig);