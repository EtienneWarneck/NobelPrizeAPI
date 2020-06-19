import React, { Component } from 'react';
import axios from 'axios';
import WinnerCard from '../../components/WinnerCard/WinnerCard'

class Cards extends Component {
    state = {
        allCards: []
    }

    // passButtonValue = (buttonValue) => {
    //     buttonValue = buttonValue.slice(0, 3).toLowerCase();
    //     this.setState({
    //         category: buttonValue
    //     })
    // }

    componentDidMount() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?sort=desc&nobelPrizeCategory=eco&format=json&csvLang=en')
            .then(res => {
                const categoryData = res.data.nobelPrizes;
                console.log("categoryData", res.data.nobelPrizes)
                // console.log("CATEGORY", categoryData?.category?.en)

                this.setState({
                    allCards: categoryData,
                    // category: buttonValue
                })
            }).
            catch(err => console.log(err))
    };


    render() {

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
            <div>
                {cards}
            </div>
        )
    }
}

export default Cards
