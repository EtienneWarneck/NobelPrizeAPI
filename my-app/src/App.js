import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import cardsDisplay from './components/CardsDisplay/CardsDisplay';
import { Link } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Button from 'react-bootstrap/Button';
import CardsDisplay from './components/CardsDisplay/CardsDisplay';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsData: null
    }
  }
  componentDidMount() {
    axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}')
      .then(res => {
        // console.log("response.data", res.data);
        this.setState({ cardsData: res.data });
        // console.log("test name", res.data[0].laureates[0].knownName.en)
        //SAME AS: console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
        // console.log("test category", res.data[0].category.en)
      }).
      catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <Navbar />
        {/* <SearchBar /> */}
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/cards" render={(props) => <CardsDisplay {...props} cardsData={this.state.cardsData} />} />
        </Router>
      </div>
    );
  }
}

export default App;
