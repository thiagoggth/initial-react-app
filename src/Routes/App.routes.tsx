import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect path="/" to="/" />
    </Switch>
  </HashRouter>
);

export default AppRoutes;
