import React, { Component, Fragment } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonCategory from '../ButtonCategory/ButtonCategory';
import CategoriesCard from '../CategoriesCard/CategoriesCard';
import WinnerCard from '../WinnerCard/WinnerCard'
import './ButtonsCategories.css'

export class ButtonsCategories extends Component {
    state = {
        allCards: [],
        category: []
    };

    handleClick = (event) => {
        // event.preventDefault();
        console.log("HANDLECLICK")
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=2&sort=desc&nobelPrizeCategory=' + this.state.category + '&format=json&csvLang=en')
            .then(res => {
                const categoryData = res.data.nobelPrizes;

                console.log(categoryData)

                this.setState({
                    allCards: categoryData,
                    // category:  

                })
            }).
            catch(err => console.log(err))
    };

    render() {

        //BUTTONS CATEGORIES
        const allCategoriesButtons = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];

        const allCatMap = allCategoriesButtons.map((e) => {
            return < ButtonCategory
                key={e.id}
                value={e}
                name={e}
                onClick={this.handleClick}
            />

        })

        //CARDS 
        const cards = this.state.allCards.map((e) => {
            return <WinnerCard
                key={e.id}
                awardYear={e.awardYear}
                category={e.category.en}
                name={e.laureates[0].knownName?.en}
                motivation={e.laureates[0].motivation?.en}
            />
        })

        return (
            <div className="container">
                <div className="btn-group w-100">
                    {allCatMap}
                </div>
                {cards}
            </div>
        )
    }
}

export default ButtonsCategories;