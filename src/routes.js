import React from 'react';

import { home } from './views/home';
import { game } from './views/game';
import { result } from './views/result';

import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to='/home' />
        </Route>
        <Route path="/home" component={ home } />
        <Route path="/game" component={ game } />
        <Route path="/result" component={ result } />
      </Switch>
    </>
  )
}