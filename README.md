# react-sketchgame ⚛️✍️

[![CodeQL](https://github.com/jv-k/react-sketchgame/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/jv-k/react-sketchgame/actions/workflows/codeql-analysis.yml)  [![CodeFactor](https://www.codefactor.io/repository/github/jv-k/react-sketchgame/badge)](https://www.codefactor.io/repository/github/jv-k/react-sketchgame)
## A Multi-round Sketching Game ✏️

This a multi-round sketching game built using ReactJS, and utilizes [@googlecreativelab/quickdraw-dataset](https://github.com/googlecreativelab/quickdraw-dataset) machine learning dataset to recognise the user's drawings.

![Game view](/imgs/screenshot.gif)

## Quick Start 🎬

This app has been tested and working with `node 10.16.0 - 14.17.0` on `MacOS`, please ensure you have a version installed within this range.

To install:

```sh
npm install   # Install dependencies
npm run start # Run game
```

## Timed Drawing ⏳
The rounds are timed. For each round, a time counts down from 20 seconds. 

If by the end of those **20 seconds** the player has failed to draw a passable sketch, no points will be awarded, and the player will proceed to the next round.

If the player passes the round by sketching a passable drawing, a point is awarded, and the player advances to the next round.

## Winning or losing 🏆
The final view displays the amount of points obtained, as well as a text that indicates whether the player has won or lost the game.

## Simple navigation between views ↔️
This app uses React-Router to navigate between the start screen and game-play.

## Demonstrating knowledge of ReactJS 🎓
I made appropriate use of the following React functions and patterns:

- [x] Both class-based and function-based components
- [x] Custom hooks
- [x] Appropriate use of the useReducer() hook
- [x] Appropriate use of side-effects
  - [x] i.e. the useEffect() hook, or the componentDidMount() lifecycle methods
- [x] Use of Context to avoid "prop-drilling"
- [x] Three test suites that test the features of the UI

## TODO – A future version 🚧
- [x] Create & add gameplay GIFs to docs
- [ ] Add more integration / unit tests for game & results views
- [ ] Make the score a factor in the time allowed per round ("hard" mode)
- [ ] Improve / expand detection and no. of recognised things
- [ ] Move styles out of JSX and use `styled-components`
- [ ] Improve / polish the window size + mobile platform usability
