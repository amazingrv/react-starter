import './styles.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './redux/store';

const mountNode = document.querySelector('#app');

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    mountNode
  );
};

render();

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
