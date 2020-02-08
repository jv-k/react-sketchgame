# EPFL-EXTS React Course – Final Project

## ✏️ A Multi-round Sketching Game

## ⏳ Timed Drawing

The rounds are timed. For each round, a time counts-down from 20 seconds. 

If by the end of those **20 seconds** the player has failed to draw a passable sketch, no points will be awarded, and the player will proceed to the next round.

If the player passes the round by sketching a passable drawing, a point is awarded, and the player advances to the next round.

## 🏆 Winning or losing
The final view displays the amount of points obtained, as well as a text that indicates whether the player has won or lost the game.

## ↔️ Simple navigation between views
This app uses React-Router to navigate between the start screen and game-play.

## 🔧 Building from scratch
– You'll be expected to use the source code in the project resources as your starting-point for re-producing the Sketch app.

– I also recommend not changing any of the code related to the TensorFlow.js integration.

## 🎁 Features for bonus points:
- [ ] Make the score a factor of how quickly the player passes each round
- [ ] Randomize the order of the "doodles" 
  – don't forget that changing the order of the original labels.json array will cause problems for your TFJS predictions.

## 🎓 Demonstrating your knowledge of React.js
Your submission must make appropriate use of the following React functions and patterns:

- [ ] Both class-based and function-based components
- [ ] Two custom hooks
- [ ] Appropriate use of the useReducer() hook
- [ ] Appropriate use of side-effects
  - [ ] i.e. the useEffect() hook, or the componentDidMount() lifecycle methods
- [ ] Use of Context to avoid "prop-drilling"
- [ ] At least three test suites that test the features of your UI
  - [x] You will need to add the `jest-canvas-mock` dependency to your `package.json` file:
    * `"jest-canvas-mock": "^2.1.0"`
  
You are more than welcome to borrow styles and color schemes from the other projects in this course if you so wish.

 - [ ] In order to submit your project, you'll need to push your project to the GitHub repository that we created for you.

- [ ] You will also need to host it using GitHub pages. 

- [ ] Once you've pushed all of your commits to the GitHub repository and have deployed it on GitHub Pages, please request a "1-on-1" video chat with me through the course platform to schedule your defense