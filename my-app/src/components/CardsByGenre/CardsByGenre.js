import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class CardsByGenre extends Component {

    constructor() {
        super()
        this.state = {
            value: "", // the value typed in input
            year: "",
            category: "", // the category from the API
            awardYear: "",
            name: "",
            name2: "",
            name3: "",
            allCardsEco: ""
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
        this.setState({
            value: event.target.value
        });
        console.log("YOU'RE TYPPING")
    }

    handleSubmit(event) {
        // alert('You submitted:' + this.state.value);
        event.preventDefault();
        console.log("YOU'RE SUBMITTING")

        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?nobelPrizeYear=' + this.state.value + '&nobelPrizeCategory=eco')
            .then(res => {
                console.log("RES.DATA SUBMIT", res.data)
                // console.log("CAT", res.data.nobelPrize?.category?.en)
                console.log("AWARDYEAR", res.data.nobelPrizes[0].awardYear)
                console.log('NAME', res.data.nobelPrizes[0].laureates[0].knownName.en) //OK
                console.log('CAT', res.data.nobelPrizes[0].category.en) //OK

                // if (res.data === undefined) {
                this.setState({
                    name: res.data.nobelPrizes[0].laureates[0].knownName.en,
                    name2: res.data.nobelPrizes[0].laureates[1].knownName.en,
                    name3: res.data.nobelPrizes[0].laureates[2].knownName.en,
                    category: res.data.nobelPrizes[0].category.en,
                    awardYear: res.data.nobelPrizes[0].awardYear,
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
                        Award Year Economics:
                        <input type="text" name="year" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    {/* <label>
                        Category:
                        <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" /> */}
                </form>
                <Card>
                    {/* <Card.Title> CAT:  {this.state.category} </Card.Title> */}
                    <Card.Title> NAME:  {this.state.name} </Card.Title>
                    <Card.Title>   {this.state.name2} </Card.Title>
                    <Card.Title>   {this.state.name3} </Card.Title>
                    <Card.Title> CAT:  {this.state.category} </Card.Title>
                    <Card.Title> AWARDYEAR:  {this.state.awardYear} </Card.Title>
                    {/*   <Card.Title> YEAR:  {this.state.value2} </Card.Title> */}
                </Card>

            </div>
        )
    }
}

export default CardsByGenre;
