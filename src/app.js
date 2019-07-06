import './styles.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Header from './pages/header';

const root = document.querySelector('#root');

ReactDOM.render(
  <HashRouter>
    <Header />
  </HashRouter>,
  root
);
