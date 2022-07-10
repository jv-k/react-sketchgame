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
  Here are some of the rules which I followed, in order to create discoverable, neat, easy to maintain/test/debug code,
  and to follow the paradigm of separation of concerns.

  VIEWS + ROUTES
    – Routing logic is placed inside of <src/routes.js>.
    – Each page is a react component, inside the <src/views> folder.
    – Each view has a route that triggers it.
    – A page component uses other components to assemble the page, a bit like lego blocks.
    – Route logic is mostly non-reusable, meaning the view components are non-reusable,
      however we want the components inside the <src/components> directory to be reusable.

  COMPONENTS
    – All components are inside the <src/components> directory.
    - Each component lives inside a dedicated folder within <src/components>, in separate files. 
    – Components are highly discoverable and neat and easily re-usable.
    – Each component has its main file with the same Pascal-case name.
    – Components don't use default export, to avoid any confusion when importing.
      – Rather, they're exported in their own <index.js> and then neatly imported without using the .js extension.
    – Highly re-usable components are kept in a shared folder.
    - Components are functional, unless they really need to be class-based.
    – Presentational components are provided data via props/context.
    – Container components with game logic control the state, and contain presentation components.
*/

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

import * as serviceWorker from "./serviceWorker";

import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";

/*  In order for relative paths to work when app is served from a directory other than root,
*   this will prepend the necessary path and makes the router work in each environment (local / production) */
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
