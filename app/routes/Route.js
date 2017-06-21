import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeRoute from 'app/components/routes/HomeRoute';

export default () => (
  <Switch>
    <Route
      exact
      path='/'
      component={HomeRoute}
    />
  </Switch>
);
