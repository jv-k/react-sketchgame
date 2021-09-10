/* 
Title:
  react-sketchgame ⚛️✍️
Author: 
  John Valai 
License: 
  ISC
Homepage:
  https://github.com/jv-k/react-sketchgame

Description:
  Here are some of the rules which I followed, in order to create a discoverable, neat, easy to maintain+test+debug,
  and to follow the paradigm of separation of concerns:

VIEWS + ROUTES
  – Routing logic is placed insde router.js
  – Each page is a react component, in the views folder
  – Each view has a route that triggers it
  – A page component uses other components to assemble the page like lego blocks
  – Route logic is mostly non-reusable, means view components are not reusable,
    but we want the components inside the components directory to be reusable

COMPONENTS
  – All components are inside components directory
  - All components are inside a dedicated components directory, in a separate file. 
  – Components are highly discoverable and neat and easily re-usable
  – Each components has it's main file with the same Pascal-case name
  – Each component doesn't use default export, it avoid confusion when importing
    – Rather, it's exported in it's own index.js and neatly imported without using the .js extension
  – Highly re-usable components kept in shared folder
  - Components are functional, unless they really need to be class-based
  – Presentational components are provided data via props/context
  – Container component w/game logic control the state, and contain presentation components
  – 
*/

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

import * as serviceWorker from "./serviceWorker";

import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";

/* This will prepend necessary path and make router work in each environment: local as well as production
*  for relative paths to work when app is served from a directory other than root */
ReactDOM.render(
  <Router basename={ process.env.PUBLIC_URL }>
    <Routes/>
  </Router>,
  document.getElementById("root")
);

/* If you want your app to work offline and load faster, you can change
*  unregister() to register() below. Note this comes with some pitfalls.
*  Learn more about service workers: http://bit.ly/CRA-PWA */
serviceWorker.unregister();
