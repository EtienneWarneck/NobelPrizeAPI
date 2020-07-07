import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './containers/Routing'


class App extends Component {
  render() {
    return (
      <div >
        <React.StrictMode>
          <BrowserRouter>
            <Routing />
            {/* <Route path="/cards" render={(props) => <CardsWinner {...props} cardsData={this.state.cardsData} />} /> */}
          </BrowserRouter>
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
