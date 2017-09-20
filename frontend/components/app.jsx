import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashPageContainer from "./splash_page/splash_page_container";

const App = () => (
  <div>

    <Switch>
       <Route exact path="/" component={SplashPageContainer} />
    </Switch>
  </div>
);
{/* <AuthRoute path="/login" component={SessionFormContainer} />
<AuthRoute path="/signup" component={SessionFormContainer} /> */}

export default App;
