import React from 'react';
import { ThemeProvider } from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import defaultTheme from 'app/themes/default';

import BrandsRoute from 'app/components/Store/Routes/BrandsRoute';
import BrandRoute from 'app/components/Store/Routes/BrandRoute';
import CategoriesRoute from 'app/components/Store/Routes/CategoriesRoute';
import CategoryRoute from 'app/components/Store/Routes/CategoryRoute';
import ProductRoute from 'app/components/Store/Routes/ProductRoute';
import HomeRoute from 'app/components/Store/Routes/HomeRoute';
import CartRoute from 'app/components/Store/Routes/CartRoute';
import CheckoutRoute from 'app/components/Store/Routes/CheckoutRoute';
import CheckoutThanksRoute from 'app/components/Store/Routes/CheckoutThanksRoute';
import AboutRoute from 'app/components/Store/Routes/AboutRoute';
import FontsRoute from 'app/components/Store/Routes/FontsRoute';

export default () => (
  <ThemeProvider theme={defaultTheme}>
    <MuiThemeProvider theme={defaultTheme}>
      <Switch>
        {/* Home Route */}
        <Route
          exact
          path="/"
          component={HomeRoute}
        />
        {/* List brands Route */}
        <Route
          path="/brands"
          component={BrandsRoute}
        />
        {/* Show brand Route */}
        <Route
          exact
          path="/brand/:brandId"
          component={BrandRoute}
        />

        {/* List categories Route */}
        <Route
          path="/categories"
          component={CategoriesRoute}
        />
        {/* Show category Route */}
        <Route
          exact
          path="/category/:categoryId"
          component={CategoryRoute}
        />

        {/* Show product Route */}
        <Route
          exact
          path="/product/:productId"
          component={ProductRoute}
        />

        {/* Show cart Route */}
        <Route
          exact
          path="/cart"
          component={CartRoute}
        />

        {/* Show checkout Route */}
        <Route
          exact
          path="/checkout"
          component={CheckoutRoute}
        />

        {/* Show checkout thanks Route */}
        <Route
          exact
          path="/checkout/thanks/:orderNumber"
          component={CheckoutThanksRoute}
        />

        {/* Show about  Route */}
        <Route
          exact
          path="/about"
          component={AboutRoute}
        />

        <Route
          exact
          path="/fonts"
          component={FontsRoute}
        />
      </Switch>
    </MuiThemeProvider>
  </ThemeProvider>
);
