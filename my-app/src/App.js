import React, { Component } from 'react';
import './App.css';
// import SearchBar from './components/SearchBar/SearchBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './components/Home/Home';
// import cardsDisplay from './components/CardsDisplay/CardsDisplay';
// import { Link } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
// import Button from 'react-bootstrap/Button';
// import CardsWinner from './components/WinnerCard/WinnerCard';
// import AllCardsByGenre from './components/AllCardsByGenre/AllCardsByGenre';
// import CardsByGenre from './components/CardsByGenre/CardsByGenre';
import ButtonsCategories from './components/ButtonsCategories/ButtonsCategories';
import Buttons from './containers/Buttons/Buttons';
import Cards from './containers/Cards/Cards'
// import WinnerCard from './components/WinnerCard.'
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsData: null
    }
  }
  // componentDidMount() {
  //   axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}')
  //     .then(res => {
  //       // console.log("response.data", res.data);
  //       this.setState({ cardsData: res.data });
  //       // console.log("test name", res.data[0].laureates[0].knownName.en)
  //       //SAME AS: console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
  //       // console.log("test category", res.data[0].category.en)
  //     }).
  //     catch(err => console.log(err))
  // };

  render() {
    return (
      <div >
        {/* <Navbar /> */}
        {/* <SearchBar /> */}
         <BrowserRouter>
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={Buttons} />
          <Route exact path="/cards" component={Cards} />
          {/* <Route path="/cards" render={(props) => <CardsWinner {...props} cardsData={this.state.cardsData} />} /> */}
        </BrowserRouter> 
        {/* <div className="container d-flex" >

          <Buttons />

        </div> */}
      </div>
    );
  }
}

export default App;
