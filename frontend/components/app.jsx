import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashPageContainer from "./splash_page/splash_page_container";
import OsonoviewContainer from "./osonoview/osonoview_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>

    <Switch>
      <AuthRoute exact path="/" component={SplashPageContainer} />
      <ProtectedRoute path="/osonoview" component={OsonoviewContainer}/>
    </Switch>
  </div>
);

export default App;
