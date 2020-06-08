import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card';
import axios from 'axios';
import WinnerCard from '../WinnerCard/WinnerCard'

export class AllCardsByGenre extends Component {
    constructor() {
        super()
        this.state = {
            allCards: [],
            name: "",
            awardYear: "",
            category: "",
            motivation: ""
        }
    }

    componentDidMount() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes')
            .then(res => {
                console.log("RES.DATA", res.data)
                this.setState({
                    allCards: res.data.nobelPrizes,
                    name: res.data.nobelPrizes[0]['laureates'][0]['knownName']['en'],
                    awardYear: res.data.nobelPrizes[0].awardYear,
                    category: res.data.nobelPrizes[0].category.en,
                    motivation: res.data.nobelPrizes[0]['laureates'][0]['motivation']['en']
                })
            }).
            catch(err => console.log(err))
    };

    render() {
        const laureates = this.state.allCards.map((e) => {
            return (
                <WinnerCard
                    key={e.laureates[0].id}
                    name={e.laureates[0].knownName?.en}
                    awardYear={e.awardYear}
                    category={e.category.en}
                    motivation={e.laureates[0].motivation?.en}
                />
            )
        })

        return (
            <div>
                {/*  // Testing one card:
                <WinnerCard
                    name={this.state.name}
                    awardYear={this.state.awardYear}
                    category={this.state.category}
                    motivation={this.state.motivation} /> */}
                {laureates}
            </div>
        )
    }
}

export default AllCardsByGenre;
