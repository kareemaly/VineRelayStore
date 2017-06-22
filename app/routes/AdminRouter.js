import React from 'react';
import { ThemeProvider } from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import defaultTheme from 'app/themes/admin/default';

import DefaultRoute from 'app/components/Admin/Routes/DefaultRoute';
import LoginRoute from 'app/components/Admin/Routes/LoginRoute';

export default () => (
  <ThemeProvider theme={defaultTheme}>
    <MuiThemeProvider theme={defaultTheme}>
      <Switch>
        {/* Default Route */}
        <Route
          exact
          path='/admin'
          component={DefaultRoute}
        />

        {/* Login Route */}
        <Route
          path='/admin/login'
          component={LoginRoute}
        />

        {/* */}
        <Route
          path='/admin/test'
          component={() => <div>Test</div>}
        />
      </Switch>
    </MuiThemeProvider>
  </ThemeProvider>
);
