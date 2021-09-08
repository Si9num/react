import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import getArticles from './redux/api';

import Form from './form';

import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Form />
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
// console.log(getArticles);
