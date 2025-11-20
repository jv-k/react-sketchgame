# react-sketchgame ⚛️✍️

[![CodeQL](https://github.com/jv-k/react-sketchgame/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/jv-k/react-sketchgame/actions/workflows/codeql-analysis.yml)  [![CodeFactor](https://www.codefactor.io/repository/github/jv-k/react-sketchgame/badge)](https://www.codefactor.io/repository/github/jv-k/react-sketchgame)
## A Multi-round Sketching Game ✏️

This is a multi-round sketching game built using ReactJS, and uses [@googlecreativelab/quickdraw-dataset](https://github.com/googlecreativelab/quickdraw-dataset) machine learning dataset to recognize the user's drawings.

![Game view](/imgs/screenshot.gif)

## Quick Start 🎬

This app has been tested and working with `node 10.16.0 - 14.17.0` on `MacOS`, please ensure you have a version installed within this range.

To install:

```sh
npm install   # Install dependencies
npm run start # Run game
```

## Timed Drawing ⏳
Each round is timed with a 20-second countdown. If the player successfully sketches a recognizable drawing within the time limit, they are awarded a point and advance to the next round. If the time runs out before a passable sketch is drawn, no points are awarded, and the game proceeds to the next round.

## Winning or losing 🏆
The final screen displays the total score and a message indicating whether the player won or lost.

## Simple navigation between views ↔️
This app uses React-Router to navigate between the start screen and game-play.

## Demonstrating knowledge of ReactJS 🎓
This project demonstrates the following React features and patterns:

- [x] Class-based and functional components
- [x] Custom hooks
- [x] State management with `useReducer`
- [x] Side-effect management (e.g., `useEffect`, lifecycle methods)
- [x] Context API to avoid prop-drilling
- [x] Unit testing for UI components

## TODO – A future version 🚧
- [x] Create & add gameplay GIFs to docs
- [ ] Add more integration / unit tests for game & results views
- [ ] Make the score a factor in the time allowed per round ("hard" mode)
- [ ] Improve / expand detection and no. of recognised things
- [ ] Move styles out of JSX and use `styled-components`
- [ ] Improve / polish the window size + mobile platform usability
