import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export class CardsByGenre extends Component {

    constructor() {
        super()
        this.state = {
            value: "", // the value typed in input
            // value2: "",
            category: "", // the category from the API
            awardYear: "",
            name: ""

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // componentDidMount() {
    //     axios.get('http://api.nobelprize.org/2.0/nobelPrizes?nobelPrizeYear')
    //         .then(res => {
    //             console.log("RES.DATA", res.data)
    //             // console.log("CAT", res.data.nobelPrizes[0].category);

    //             this.setState({
    //                 // category: res.data.nobelPrizes[0],
    //                 // allCards: res.data.nobelPrizes,
    //                 // name: res.data.nobelPrizes[0]['laureates'][0]['knownName']['en'],
    //                 // awardYear: res.data.nobelPrizes[0].awardYear,
    //                 // motivation: res.data.nobelPrizes[0]['laureates'][0]['motivation']['en']
    //             })
    //         }).
    //         catch(err => console.log(err))
    // };

    handleChange(event) { //handleChange runs on every keystroke to update the React state of value
        this.setState({ value: event.target.value });
        console.log("YOU'RE TYPPING")
    }
    // handleChange2(event) { //handleChange runs on every keystroke to update the React state of value
    //     this.setState({ value: event.target.value });
    //     console.log("YOU'RE TYPPING 2")
    // }

    handleSubmit(event) {
        // alert('You submitted:' + this.state.value);
        event.preventDefault();
        console.log("YOU'RE SUBMITTING")

        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?nobelPrizeYear=' + this.state.value + '&nobelPrizeCategory=eco')
            .then(res => {
                console.log("RES.DATA SUBMIT", res.data)
                // console.log("CAT", res.data.nobelPrize?.category?.en)
                // console.log("AWARDYEAR", res.data.nobelPrizes.category.year)
                console.log('NAME', res.data.nobelPrizes[0].laureates[0].knownName.en,)

                // if (res.data === undefined) {
                this.setState({
                    // category: res.data.nobelPrizes?.category?.en
                    name: res.data.nobelPrizes[0].laureates[0].knownName.en,
                    // awardYear: res.data.nobelPrizes[0].awardYear,
                    // category: res.data.nobelPrize?.category?.en,
                    // nobelPrizes?nobelPrizeCategory=eco
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
                    {/* <label>
                        Category:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label> */}
                     <label>
                      ECOWINNER Year:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Card>
                    {/* <Card.Title> CAT:  {this.state.category} </Card.Title> */}
                    <Card.Title> NAME:  {this.state.name} </Card.Title>
                    {/* <Card.Title> AWARDYEAR:  {this.state.awardYear} </Card.Title>
                    <Card.Title> YEAR:  {this.state.value2} </Card.Title> */}
                </Card>
            </div>
        )
    }
}

export default CardsByGenre;
