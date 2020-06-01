import React, { Fragment } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/pages/welcome';
import Selected from './components/pages/selected';
import { Link } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';



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
            <Link to="/selected">
              <Button>Selected</Button>
            </Link>
          </ButtonToolbar>
        </h2> */}
      <Toolbar/>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route path="/selected" component={Selected} />
      </div>
    </Router>
  );
}

export default App;
