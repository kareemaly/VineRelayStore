import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import defaultTheme from 'app/themes/store/default';

import HomeRoute from 'app/components/Store/Routes/HomeRoute';

export default () => (
  <ThemeProvider theme={defaultTheme}>
    <Switch>
      {/* Home Route */}
      <Route
        exact
        path='/'
        component={HomeRoute}
      />
      <Route
        exact
        path='/products'
        component={() => <div>Products</div>}
      />
    </Switch>
  </ThemeProvider>
);
