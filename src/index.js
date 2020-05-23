import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Demo from './Demo';
import './styles.scss';

var mountNode = document.querySelector('#app');
ReactDOM.render(
  <HashRouter>
    <Demo />
  </HashRouter>,
  mountNode
);
