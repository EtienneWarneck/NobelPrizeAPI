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
        category: ''

    }

    handleClick = (buttonValue) => {
        // only 3 first letters of the button to match categories in the  API:
        buttonValue = buttonValue.slice(0, 3).toLowerCase();

        console.log("HANDLECLICK")
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=10&sort=desc&nobelPrizeCategory=' + buttonValue + '&format=json&csvLang=en')
            .then(res => {
                const categoryData = res.data.nobelPrizes;
                console.log(categoryData)
                // console.log("CATEGORY", categoryData?.category?.en)

                this.setState({
                    allCards: categoryData,
                    category: buttonValue
                })
            }).
            catch(err => console.log(err))
    };

    render() {

        //BUTTONS CATEGORIES
        const allCategoriesButtons = ["physics", "che", "Medicine", "Literature", "Peace", "Economics"];
        const allCatMap = allCategoriesButtons.map((button) => {
            return < ButtonCategory
                key={button.toString()}
                value={button}
                name={button}
                onClick={e => this.handleClick(e.target.value)}
            />
        })

        //CARDS 
        const cards = this.state.allCards.map((card) => {
            return <WinnerCard
                key={card.toString()}
                awardYear={card.awardYear}
                category={card.category.en}
                name={card.laureates[0].knownName?.en}
                motivation={card.laureates[0].motivation?.en}
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