import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

const AuthRoutes: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Redirect path="/" to="/login" />
    </Switch>
  </HashRouter>
);

export default AuthRoutes;
