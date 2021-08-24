import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import { country } from './country';
import sendBtn from './sendBtn';
import toggle from './toggle';

country();

ReactDOM.render(<Form />, document.querySelector('#root'));
sendBtn();
toggle();
