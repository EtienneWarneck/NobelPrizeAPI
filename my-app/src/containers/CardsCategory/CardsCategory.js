import React, { Component } from 'react';
import axios from 'axios';
import classes from './CardsCategory.css';
import WinnerCard from '../../components/WinnerCard/WinnerCard'
// import HomeButtons from "../HomeButtons/HomeButtons"

class Cards extends Component {
    state = {
        allCards: [],
        category: null
    }

    componentDidMount() {
        console.log("CARDS CATEGORY", this.props)
        let category = this.props.match.params.category_name;

        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?&sort=desc&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
            .then(res => {
                const categoryData = res.data.nobelPrizes;
                console.log("categoryData", res.data.nobelPrizes)
                // console.log("CATEGORY", categoryData?.category?.en)

                this.setState({
                    allCards: categoryData,
                    //<fetch category from the API that your router provides>
                    category: this.props.match.params.category_name

                })
            }).
            catch(err => console.log(err))
    };

    render() {
        const cards = this.state.allCards.map((card) => {
            return <WinnerCard
                // className={}
                key={card.id}
                awardYear={card.awardYear}
                category={card.category.en}
                name={card.laureates[0].knownName?.en}
                motivation={card.laureates[0].motivation?.en}
            />
        })

        return (
            <div>
                {/* <div className="container__section">
                    {allCatMap}
                </div > */}
                <div>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Cards
