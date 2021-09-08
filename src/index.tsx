import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

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
