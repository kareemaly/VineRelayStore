import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import defaultTheme from 'app/themes/store/default';

import BrandsRoute from 'app/components/Store/Routes/BrandsRoute';
import BrandRoute from 'app/components/Store/Routes/BrandRoute';
import CategoriesRoute from 'app/components/Store/Routes/CategoriesRoute';
import CategoryRoute from 'app/components/Store/Routes/CategoryRoute';
import ProductRoute from 'app/components/Store/Routes/ProductRoute';
import HomeRoute from 'app/components/Store/Routes/HomeRoute';
import CartRoute from 'app/components/Store/Routes/CartRoute';

export default () => (
  <ThemeProvider theme={defaultTheme}>
    <Switch>
      {/* Home Route */}
      <Route
        exact
        path='/'
        component={HomeRoute}
      />
      {/* List brands Route */}
      <Route
        path='/brands'
        component={BrandsRoute}
      />
      {/* Show brand Route */}
      <Route
        exact
        path='/brand/:brandId'
        component={BrandRoute}
      />

      {/* List categories Route */}
      <Route
        path='/categories'
        component={CategoriesRoute}
      />
      {/* Show category Route */}
      <Route
        exact
        path='/category/:categoryId'
        component={CategoryRoute}
      />

      {/* Show product Route */}
      <Route
        exact
        path='/product/:productId'
        component={ProductRoute}
      />

      {/* Show cart Route */}
      <Route
        exact
        path='/cart'
        component={CartRoute}
      />


      <Route
        exact
        path='/products'
        component={() => <div>Products</div>}
      />
    </Switch>
  </ThemeProvider>
);
