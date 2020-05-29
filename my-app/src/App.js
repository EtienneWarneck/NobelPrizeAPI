import React, { Fragment } from 'react';
import './App.css';
// import Toolbar from './components/Toolbar/Toolbar'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Welcome from './components/pages/welcome';
import Selected from './components/pages/selected';
// import { Link } from 'react-router';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import Button from 'react-bootstrap/Button';



function App() {
  // const Home = () => <span>Home</span>;
  // const Selected = () => <span>Selected</span>;
  return (
    <Router>
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
        <Switch>

          <Route path="/selected">
            <Selected />
          </Route>

          <Route path="/">
            <Welcome />
          </Route>

        </Switch>
      </Fragment>

</Router>
  );
}

export default App;
