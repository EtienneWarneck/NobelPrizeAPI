import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import WinnerCard from '../WinnerCard/WinnerCard'

export class ButtonEco extends Component {

    constructor() {
        super()
        this.state = {
            allCardsEco: [],
        }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=100&sort=desc&nobelPrizeCategory=eco&format=json&csvLang=en')
            .then(res => {
                // console.log("RES.DATA", res.data) //all eco posts
                // console.log("AWARDYEAR", res.data.nobelPrizes[0].awardYear) //OK
                // console.log('NAME', res.data.nobelPrizes[0].laureates[0].knownName.en) //OK
                console.log('CAT', res.data.nobelPrizes[0].category.en) //OK

                const categoryData = res.data.nobelPrizes;

                this.setState({
                    allCardsEco: categoryData
                    // name: res.data.nobelPrizes[0]['laureates'][0]['knownName']['en'],
                    // awardYear: res.data.nobelPrizes[0].awardYear,
                    // motivation: res.data.nobelPrizes[0]['laureates'][0]['motivation']['en']
                })
            }).
            catch(err => console.log(err))
    };

    render() {
        //create array of laureates
        const laureates = this.state.allCardsEco.map((e) => {
            return <WinnerCard
                // key={e.laureates[0].id}
                key={e.toString()}
                // value={e}
                awardYear={e.awardYear}  // YEAR
                category={e.category.en} // -- PRIZE CATEGORY -- //
                name={e.laureates[0].knownName?.en} // NAME OF WINNER
                // name1={e.laureates[1].knownName?.en} // NAME OF WINNER
                // name2={e.laureates[2].knownName?.en} // NAME OF WINNER
                motivation={e.laureates[0].motivation?.en}
            // value={e.category}
            // award={e.award}  // YEAR
            />
        })
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}> */}
                <Button type="button" name="eco" onClick={this.handleClick}>ECONOMICS </Button>
                {/* </form>  */}

                <Card>
                    {/* <Card.Title>ALL CARDS ECO</Card.Title> */}
                    <Card.Title>{laureates}</Card.Title>
                    {/* <Card.Title> {this.state.allCardsEco} </Card.Title>
                    <Card.Title> NAME:  {this.state.category} </Card.Title> */}
                    {laureates}
                </Card>
            </div>
        )
    }
}


export default ButtonEco;