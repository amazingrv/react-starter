import './styles.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Header from './header/header';

const root = document.querySelector('#root');

ReactDOM.render(
  <HashRouter>
    <Header />
  </HashRouter>,
  root
);
