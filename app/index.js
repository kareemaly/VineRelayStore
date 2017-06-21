import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/components/common/App';
import AppRouter from 'app/routes/Route';
import 'whatwg-fetch';

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);

ReactDOM.render(
  <BrowserRouter>
    <App>
      <AppRouter />
    </App>
  </BrowserRouter>,
  rootNode
);
