import React from 'react';
import { ThemeProvider } from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Switch, Route } from 'react-router-dom';
import defaultTheme from 'app/themes/default';

import DefaultRoute from 'app/components/Admin/Routes/DefaultRoute';

import ListProductsRoute from 'app/components/Admin/Routes/ListProductsRoute';
import EditProductRoute from 'app/components/Admin/Routes/EditProductRoute';
import CreateProductRoute from 'app/components/Admin/Routes/CreateProductRoute';

import ListCategoriesRoute from 'app/components/Admin/Routes/ListCategoriesRoute';
import EditCategoryRoute from 'app/components/Admin/Routes/EditCategoryRoute';
import CreateCategoryRoute from 'app/components/Admin/Routes/CreateCategoryRoute';

import ListBrandsRoute from 'app/components/Admin/Routes/ListBrandsRoute';
import EditBrandRoute from 'app/components/Admin/Routes/EditBrandRoute';
import CreateBrandRoute from 'app/components/Admin/Routes/CreateBrandRoute';

import ListOrdersRoute from 'app/components/Admin/Routes/ListOrdersRoute';
import ViewOrderRoute from 'app/components/Admin/Routes/ViewOrderRoute';

import LoginRoute from 'app/components/Admin/Routes/LoginRoute';

export default () => (
  <ThemeProvider theme={defaultTheme}>
    <MuiThemeProvider muiTheme={getMuiTheme(defaultTheme)}>
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

        {/* List categories Route */}
        <Route
          path='/admin/categories'
          component={ListCategoriesRoute}
        />
        {/* Create product Route */}
        <Route
          exact
          path='/admin/category/create'
          component={CreateCategoryRoute}
        />
        {/* Edit category Route */}
        <Route
          exact
          path='/admin/category/:categoryId'
          component={EditCategoryRoute}
        />

        {/* List brands Route */}
        <Route
          path='/admin/brands'
          component={ListBrandsRoute}
        />
        {/* Create brand Route */}
        <Route
          exact
          path='/admin/brand/create'
          component={CreateBrandRoute}
        />
        {/* Edit brand Route */}
        <Route
          exact
          path='/admin/brand/:brandId'
          component={EditBrandRoute}
        />

        {/* List orders Route */}
        <Route
          path='/admin/orders'
          component={ListOrdersRoute}
        />
        {/* View order Route */}
        <Route
          exact
          path='/admin/order/:orderId'
          component={ViewOrderRoute}
        />

      </Switch>
    </MuiThemeProvider>
  </ThemeProvider>
);
