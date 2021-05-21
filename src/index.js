import './styles.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import Routes from './Routes';

const mountNode = document.querySelector('#app');

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading ...</div>}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  </Provider>,
  mountNode
);

if (module.hot) {
  module.hot.accept();
}
