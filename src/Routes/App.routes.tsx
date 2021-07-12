import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ROUTES from './Constants.routes';

const AppRoutes: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path={ROUTES.HOME} exact component={Home} />
      <Redirect path="/" to={ROUTES.HOME} />
    </Switch>
  </HashRouter>
);

export default AppRoutes;
