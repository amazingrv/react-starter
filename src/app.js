import './styles.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Demo from './pages/demo/demo';

const root = document.querySelector('#root');

ReactDOM.render(
  <HashRouter>
    <Demo />
  </HashRouter>,
  root
);
