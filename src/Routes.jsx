import React, { useState } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Home from './components/home/Home';
import DataTable from './components/DataTable/DataTable';

const Routes = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="container mb-2" color="light" light expand="md">
        <Link
          className="navbar-brand"
          replace={'/' === location.pathname}
          to="/"
        >
          ReactJS
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link
                className="nav-link"
                replace={'/' === location.pathname}
                to="/"
              >
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                replace={'/table' === location.pathname}
                to="/table"
              >
                DataTable
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div className="container">
        <Switch>
          <Route exact path="/table" component={DataTable} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Routes);
