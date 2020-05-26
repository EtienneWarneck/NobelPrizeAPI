import React, { Fragment } from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';
import Toolbar from './components/Toolbar/Toolbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/pages/welcome';
import Selected from './components/pages/selected'


function App() {
  return (
    <Router>
    <Fragment>
      <Toolbar />
      <div className='container_main'>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/selected' component={Selected} />
        </Switch>
      </div>
    </Fragment>
  </Router>
  );
}

export default App;
