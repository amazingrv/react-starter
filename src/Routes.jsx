import { useEffect, useState } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Axios from 'axios';
import Home from './components/home/Home';
import DataTable from './components/DataTable/DataTable';

const Routes = ({ location }) => {
  const [response, setResponse] = useState([]);

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
    Axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setResponse(response.data.slice(0, 50));
      })
      .catch(() => {
        setResponse([]);
      });
  }, []);

  return (
    <div>
      <Navbar className="mb-2" bg="light" variant="light" expand="md">
        <Container>
          <Link
            className="navbar-brand"
            replace={'/' === location.pathname}
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
                  replace={'/' === location.pathname}
                  to="/"
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link"
                  replace={'/table' === location.pathname}
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
                {...props}
                data={response}
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
