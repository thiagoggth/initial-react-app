import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import ROUTES from './Constants.routes';

const AuthRoutes: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path={ROUTES.LOGIN} exact component={Login} />
      <Redirect path="/" to={ROUTES.LOGIN} />
    </Switch>
  </HashRouter>
);

export default AuthRoutes;
