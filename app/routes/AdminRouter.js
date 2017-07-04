import React from 'react';
import { ThemeProvider } from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import defaultTheme from 'app/themes/admin/default';

import DefaultRoute from 'app/components/Admin/Routes/DefaultRoute';
import ListProductsRoute from 'app/components/Admin/Routes/ListProductsRoute';
import EditProductRoute from 'app/components/Admin/Routes/EditProductRoute';
import CreateProductRoute from 'app/components/Admin/Routes/CreateProductRoute';
import LoginRoute from 'app/components/Admin/Routes/LoginRoute';

export default () => (
  <ThemeProvider theme={defaultTheme}>
    <MuiThemeProvider theme={defaultTheme}>
      <Switch>
        {/* Login Route */}
        <Route
          path='/admin/login'
          component={LoginRoute}
        />

        {/* Default Route */}
        <Route
          exact
          path='/admin'
          component={DefaultRoute}
        />

        {/* List products Route */}
        <Route
          path='/admin/products'
          component={ListProductsRoute}
        />

        {/* Create product Route */}
        <Route
          exact
          path='/admin/product/create'
          component={CreateProductRoute}
        />

        {/* Edit product Route */}
        <Route
          exact
          path='/admin/product/:productId'
          component={EditProductRoute}
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
