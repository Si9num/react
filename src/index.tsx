import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from './form';

import './style.css';

ReactDOM.render(
  <Router>
    <Form />
  </Router>,
  document.querySelector('#root'),
);
