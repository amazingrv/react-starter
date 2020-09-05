import './app.css';

import React from 'react';
import logo from '../assets/logo.svg';
import Counter from '../counter/Counter';

const App = () => {
  return (
    <section className="hero is-light is-bold is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={logo} className="logo title" alt="logo" />
          <Counter />
        </div>
      </div>
      <div className="hero-foot py-5">
        <div className="content has-text-centered">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default App;
