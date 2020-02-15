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
        <ErrorBoundary> 
          {/* Handle error: navigating to /result will result in an error,
              as props.location isn't passed, normally it's passed by the router from /game */}
          <Route path="/result" component={ Result } />
        </ErrorBoundary>          
      </Switch>
    </>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <>
          <div className="h-100 d-flex align-items-center">
            <div className="container-sm text-center">
              <h2>Oops.... </h2>
              <h2>Something went wrong!</h2>
            </div>
          </div>
        </>
      );
    } else {
      // No error, just render children
      return this.props.children;
    }
  }  
}
