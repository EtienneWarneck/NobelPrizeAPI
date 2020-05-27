import React, { Fragment } from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';
import Toolbar from './components/Toolbar/Toolbar'
import { MemoryRouter, Link ,Route, Switch } from 'react-router-dom';
import Welcome from './components/pages/welcome';
import Selected from './components/pages/selected';
// import { Link } from 'react-router';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';



function App() {
  const Home = () => <span>Home</span>;

  const About = () => <span>About</span>;

  const Users = () => <span>Users</span>;

  return (
    <MemoryRouter>
       {/* <h2>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar">
            <Link to="/">
              <Button className="btn btn-small">Welcome</Button>
            </Link>
            <Link to="/about">
              <Button>About</Button>
            </Link>
          </ButtonToolbar>
        </h2> */}

      <Fragment>
        <Toolbar />
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </div>
      </Fragment>
     

    </MemoryRouter>
  );
}

export default App;
