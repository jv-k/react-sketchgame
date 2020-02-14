import React from 'react';

import { Home } from './views/home';
import { Game } from './views/game';
import { Result } from './views/result';

import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to='/home' />
        </Route>
        <Route path="/home" component={ Home } />
        <Route path="/game" component={ Game } />
        <Route path="/result" component={ Result } />
      </Switch>
    </>
  )
}