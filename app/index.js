import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AdminRouter from 'app/routes/AdminRouter';
import StoreRouter from 'app/routes/StoreRouter';
import 'app/config/materialui';
import 'whatwg-fetch';
import 'sanitize.css/sanitize.css';
import './global-styles';

//
const rootNode = document.createElement('div');
document.body.appendChild(rootNode);

//
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={AdminRouter} />
      <Route path="/" component={StoreRouter} />
    </Switch>
  </BrowserRouter>,
  rootNode
);
