// load data
import { loadModel } from "utils";

export const SketchGameConfig = {
  config: {
    noRounds: 10,
    timeLimit: 20, // seconds
    labels: require("labels.json"),
    model: loadModel("./model/model.json"),
    
    msgs: {
      intro: "Let's get started.",
      question: "You have <span id=\"timeLeft\">{{timeLeft}}</span> seconds to draw a <span class=\"text-danger\">{{label}}</span>",
      questionSuffix: " in the box!", // only for the first round
      pointScore: [
        "Not bad at all.",
        "That was a fine sketch!",
        "You're good!",
        "Drawing is your forté!"
      ],
      pointLose: [
        "Do you need some drawing lessons...!?", 
        "Don't forget to wear your glasses...!",
        "You can do better...!"
      ],
      win:  {
        low: "Good effort! Your score was {{score}}/{{noRounds}}. Give it another go!", 
        high: "Well done! Have you considered selling your masterpieces?",
        perfect: "Maestro! You win! You got them all right :)"
      },
      lose: {
        low: "Oops... Try harder next time! Maybe you can score more than {{score}}!",
        high: "You scored {{score}}/{{noRound}}! Almost there, but not quite!"
      },
      pause: "^500 "
    }
  }
};