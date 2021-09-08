import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import { country } from './country';

country();

ReactDOM.render(<Form />, document.querySelector('#root'));
