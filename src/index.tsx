import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import searchBar from './searchBar';
import renderCard from './cards';

ReactDOM.render(searchBar(), document.querySelector('#root'));
ReactDOM.render(renderCard(), document.querySelector('.card-container'));
