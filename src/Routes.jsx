import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import axios from 'axios';

const Home = React.lazy(() => import('./components/home/Home'));
const DataTable = React.lazy(() => import('./components/DataTable/DataTable'));

const Routes = ({ location }) => {
  const [data, setData] = useState([]);

  const columns = [
    {
      header: 'Post #',
      key: 'postId',
    },
    {
      header: 'Name',
      key: 'name',
    },
    {
      header: 'Email',
      key: 'email',
    },
  ];

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(res => setData(res.data.slice(0, 50)))
      .catch(() => setData([]));
  }, []);

  return (
    <div>
      <Navbar className="mb-2" bg="light" variant="light" expand="md">
        <Container>
          <Link
            className="navbar-brand"
            replace={location.pathname === '/'}
            to="/"
          >
            ReactJS
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Item>
                <Link
                  className="nav-link"
                  replace={location.pathname === '/'}
                  to="/"
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link"
                  replace={location.pathname === '/table'}
                  to="/table"
                >
                  DataTable
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
        <Switch>
          <Route
            exact
            path="/table"
            render={props => (
              <DataTable
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props}
                data={data}
                columns={columns}
                idKey="id"
              />
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Routes);
