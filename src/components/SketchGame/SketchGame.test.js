// Testing Philosophy (https://kentcdodds.com/blog/why-i-never-use-shallow-rendering)
// – Don't test irrelevant implementation details. The user doesn't care one bit what methods are called. 
// – Test the reason the component exists in the first place, not the component implementation details
// – If test uses instance() or state(), know that you're testing things that the user 
//   couldn't possibly know about or even care about, which will take your tests further from giving you confidence 
//   that things will work when your user uses them.
// – The more your tests resemble the way your software is used, the more confidence they can give you. 
//   — Kent C. Dodds 👋 

/*
Jest acts as a test runner, assertion library, and mocking library.
Jest also provides Snapshot testing, the ability to create a rendered
*/
/*
Enzyme is a JavaScript Testing utility for React that makes it easier to assert, 
manipulate, and traverse your React Components’ output.
Enzyme, created by Airbnb, adds some great additional utility methods for rendering 
a component (or multiple components), finding elements, and interacting with elements.
*/
/*
Both Jest and Enzyme are specifically designed to test React applications, 
Jest can be used with any other Javascript app but Enzyme only works with React.
Jest can be used without Enzyme to render components and test with snapshots, Enzyme simply adds additional functionality.
Enzyme can be used without Jest, however Enzyme must be paired with another test runner if Jest is not used.

Use
– Jest as the test runner, assertion library, and mocking library
– Enzyme to provide additional testing utilities to interact with elements
*/
import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { Router } from "react-router";
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from "history";

import { SketchGame } from "components/SketchGame";
import { SketchGameConfig } from "components/SketchGame/SketchGame.config.js";
import { Routes } from 'routes.js';
import { Home } from 'views/home';
import { Game } from 'views/game';
import { Result } from 'views/result';

// use Jest's automagically provided module mocks
jest.mock('./utils/sounds.js');
jest.mock('typed.js'); 
jest.mock('./components/Canvas');

const root = document.createElement('div');

describe('GENERAL TESTS', () => {
  it('Full app renders correctly without crashing.', () => {
    const App = <MemoryRouter><SketchGame {...SketchGameConfig} /></MemoryRouter>
    render(App, root);
    unmountComponentAtNode(root);
  });  

});

describe('HOME VIEW TESTS', () => {

  it('Navigating to the game\'s root endpoint should redirect to the Home view.', () => {
    const history = createMemoryHistory();

    const App = 
      <Router history={ history }>
        <Routes />
      </Router>;
      
    render(App, root);    
    expect(history.location.pathname).toBe("/home");
    unmountComponentAtNode(root);
  });

  // Jest needs to know when the code it is testing has completed, before it can move on to another test. 
  // Jest has several ways to handle this, async is one of them, as the rest of the logic is bubbling away in the background
  // while the program flow can come back to Jest without the final state of the app under test in place.
  it("Navigates to '/game' view when user clicks the 'Play Game' button.", async () => {
    document.body.appendChild(root); // mount elements just like in real browser DOM
    const history = createMemoryHistory();

    const App = 
      <Router history={ history }>
        <Routes />
      </Router>;
    render(App, root);

    // Interact with page
    act(() => {
      const btnPlayGame = document.querySelector('#btn-play');
      btnPlayGame.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(history.location.pathname).toBe("/game");

    unmountComponentAtNode(root);
  });

  it("Clicking Sound on/off checkbox should store/change the setting in LocalStorage.", async () => {
    document.body.appendChild(root); // mount elements just like in real browser DOM
    
    const App = <MemoryRouter><Home /></MemoryRouter>  
    render(App, root);

    // Interact with page
    // NB Act ensures: any state updates will be executed + any enqueued effects will be executed
    // turn it OFF
    act(() => {
      const checkboxSound = document.querySelector('#option-sound');
      checkboxSound.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(window.localStorage.getItem("soundOn")).toBe("false");

    render(App, root); // re-render

    // turn it ON
    act(() => {
      const checkboxSound = document.querySelector('#option-sound');
      checkboxSound.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(window.localStorage.getItem("soundOn")).toBe("true");

    unmountComponentAtNode(root);
  });
});


describe('GAME VIEW TESTS', () => {


});
describe('RESULTS VIEW TESTS', () => {
});

// import Round, { Question } from "./Round";
// import Answer from "./Answer.js";
// import Controls, { Buttons, Confirmation } from "./Controls.js";

// describe("<Round />", () => {
//   it("renders correctly", () => {
//     const tree = renderer.create(<Round />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

// describe("<Round />", () => {
//   const wrapper = mount(<Round />);

//   it("renders: Question, Answer and Controls", () => {
//     expect(wrapper.contains(<Question />)).toEqual(true);
//     expect(wrapper.contains(<Answer />)).toEqual(true);
//     expect(wrapper.contains(<Controls />)).toEqual(true);
//   });

//   // it("clicks predict and the confirmation pops-up", () => {
//   //   expect(wrapper.contains(<Buttons />)).toEqual(true);
//   //   expect(wrapper.contains(<Confirmation />)).toEqual(false);
//   //   wrapper.find({ id: "predict" }).simulate("click");
//   //   expect(wrapper.contains(<Confirmation />)).toEqual(true);
//   // });
// });


