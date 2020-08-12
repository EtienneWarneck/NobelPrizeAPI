import React, { Component } from 'react';
import {  Route, Switch } from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar'
import HomeButtons from './HomeButtons/HomeButtons';
import CardsCategory from './CardsCategory/CardsCategory';

class Routing extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Navbar} />
                <Switch>
                    <Route exact path="/" component={HomeButtons} />
                    <Route  path="/:category_name" component={CardsCategory} />
                </Switch>
            </div>
        )
    }
}

export default Routing;
