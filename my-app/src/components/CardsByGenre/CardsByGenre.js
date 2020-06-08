import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export class CardsByGenre extends Component {

    constructor() {
        super()
        this.state = {
            value: "", // the value typed in input
            category: "" // the category from the API

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?' + "category=eco")
            .then(res => {
                console.log("RES.DATA", res.data)
                // console.log("CAT", res.data.nobelPrizes[0].category);

                this.setState({
                    // allCards: res.data.nobelPrizes,
                    // name: res.data.nobelPrizes[0]['laureates'][0]['knownName']['en'],
                    // awardYear: res.data.nobelPrizes[0].awardYear,
                    value: res.data.nobelPrizes?.category?.en,
                    // motivation: res.data.nobelPrizes[0]['laureates'][0]['motivation']['en']
                })
            }).
            catch(err => console.log(err))
    };

    handleChange(event) { //handleChange runs on every keystroke to update the React state of value
        this.setState({ value: event.target.value });
        console.log("YOU'RE TYPPING")
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("YOU'RE SUBMITTING")
        alert('You submitted: ' + this.state.value);

        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?/nobelPrizeCategory=?' + this.state.category)
            .then(res => {
                // console.log("RES.DATA SUBMIT", res.data)
                // console.log("CAT", res.data.nobelPrizes[0].category.en)
                // if (res.data === undefined) {
                this.setState({
                    // name: res.data.nobelPrizes[0]['laureates'][0]['knownName']['en'],
                    // awardYear: res.data.nobelPrizes[0].awardYear,
                    category: res.data.nobelPrizes?.category?.en,
                    // motivation: res.data.nobelPrizes[0]['laureates'][0]['motivation']['en']
                })
                // }
                // if (res.data !== undefined) {
                //     this.setState({ error: "Category not found" })
                // }
            }).
            catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Category:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Card>
                    <Card.Title> {this.state.value} </Card.Title>
                </Card>
            </div>
        )
    }
}

export default CardsByGenre;
