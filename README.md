# EPFL-EXTS React Course – Final Project


## ✏️ A Multi-round Sketching Game

![Intro view](/imgs/scr-01.jpg)

![Game view](/imgs/scr-02.jpg)

![Results view](/imgs/scr-03.jpg)

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
- [x] Randomize the order of the "doodles" 
  – don't forget that changing the order of the original labels.json array will cause problems for your TFJS predictions.

## 🎓 Demonstrating your knowledge of React.js
Your submission must make appropriate use of the following React functions and patterns:

- [x] Both class-based and function-based components
- [x] Two custom hooks
- [x] Appropriate use of the useReducer() hook
- [x] Appropriate use of side-effects
  - [x] i.e. the useEffect() hook, or the componentDidMount() lifecycle methods
- [x] Use of Context to avoid "prop-drilling"
- [x] At least three test suites that test the features of your UI
  - [x] You will need to add the `jest-canvas-mock` dependency to your `package.json` file:
    * `"jest-canvas-mock": "^2.1.0"`
  
You are more than welcome to borrow styles and color schemes from the other projects in this course if you so wish.

- [x] In order to submit your project, you'll need to push your project to the GitHub repository that we created for you.

- [x] You will also need to host it using GitHub pages. 

- [x] Once you've pushed all of your commits to the GitHub repository and have deployed it on GitHub Pages, please request a "1-on-1" video chat with me through the course platform to schedule your defense

## 🚧 TODO – A future version
- [ ] Add more integration / unit tests for game & results views
- [ ] Make the score a factor in the time allowed per round ("hard" mode)
- [ ] Improve / expand detection and no. of recognised things
- [ ] Move styles out of JSX abd use `styled-components`
- [ ] Improve / polish the window size + mobile platform usability