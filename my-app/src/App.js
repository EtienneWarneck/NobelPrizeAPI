import React, { Fragment } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/pages/welcome';
import Selected from './components/pages/selected';
import { Link } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Button from 'react-bootstrap/Button';



function App() {
  // const Home = () => <span>Home</span>;
  // const Selected = () => <span>Selected</span>;



  return (
    <div>
      <Navbar />
      <SearchBar />
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
        <Route exact path="/" component={Welcome} />
        <Route path="/selected" component={Selected} />
      </Router>
    </div>
  );
}

export default App;
