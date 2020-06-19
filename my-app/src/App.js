import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './containers/Routing'


class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Routing />
          {/* <Route path="/cards" render={(props) => <CardsWinner {...props} cardsData={this.state.cardsData} />} /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
