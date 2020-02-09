import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Demo = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    {/* A Switch looks through its children Routes and
            renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

const Home = () => <h2>Welcome to React Super</h2>;

const About = () => <h2>Modify the react filed to get started</h2>;

export default Demo;
