# ⚛️✍️ react-sketchgame 

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

## 🎓 Demonstrating knowledge of React.js
I made appropriate use of the following React functions and patterns:

- [x] Both class-based and function-based components
- [x] Custom hooks
- [x] Appropriate use of the useReducer() hook
- [x] Appropriate use of side-effects
  - [x] i.e. the useEffect() hook, or the componentDidMount() lifecycle methods
- [x] Use of Context to avoid "prop-drilling"
- [x] Three test suites that test the features of the UI

## 🚧 TODO – A future version
- [ ] Add more integration / unit tests for game & results views
- [ ] Make the score a factor in the time allowed per round ("hard" mode)
- [ ] Improve / expand detection and no. of recognised things
- [ ] Move styles out of JSX and use `styled-components`
- [ ] Improve / polish the window size + mobile platform usability
