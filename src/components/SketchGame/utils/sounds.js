// just a wrapper around Tone.js for playing sfx
import * as Tone from "tone";

const GameSFXConfig = {
  path: "/assets/sounds/",
  sfx: {
    click: "btn.wav",
    clear: "clear.wav",
    lose:  "game_lose.wav",
    win:   "game_win.wav",
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

  play = (id) => {
    this.sfx[id].start();
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