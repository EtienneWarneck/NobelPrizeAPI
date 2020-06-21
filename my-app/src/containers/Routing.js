import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar'
import HomeButtons from './HomeButtons/HomeButtons';
import CardsCategory from './CardsCategory/CardsCategory';

class Routing extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Navbar} />
                <Route exact path="/" component={HomeButtons} />
                <Route exact path="/cards/:category_name" component={CardsCategory} />
            </div>
        )
    }
}

export default Routing
