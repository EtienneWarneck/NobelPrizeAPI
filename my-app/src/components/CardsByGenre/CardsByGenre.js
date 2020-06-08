import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export class CardsByGenre extends Component {

    constructor() {
        super()
        this.state = {
            category: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?/nobelPrizeCategory=eco')
            .then(res => {
                console.log("RES.DATA", res.data)
                this.setState({
                    // allCards: res.data.nobelPrizes,
                    // name: res.data.nobelPrizes[0]['laureates'][0]['knownName']['en'],
                    // awardYear: res.data.nobelPrizes[0].awardYear,
                    category: res.data.nobelPrizes[0].category.en,
                    // motivation: res.data.nobelPrizes[0]['laureates'][0]['motivation']['en']
                })
            }).
            catch(err => console.log(err))
    };

    handleChange(event) {
        this.setState({ category: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?/nobelPrizeCategory=?' + this.state.category)
            .then(res => {
                console.log("RES.DATA", res.data)
                if (res.data === undefined) {
                    this.setState({
                        // name: res.data.nobelPrizes[0]['laureates'][0]['knownName']['en'],
                        // awardYear: res.data.nobelPrizes[0].awardYear,
                        // category: res.data.nobelPrizes[0].category.en,
                        // motivation: res.data.nobelPrizes[0]['laureates'][0]['motivation']['en']
                    })
                }
                if (res.data !== undefined) {
                    this.setState({ error: "Category not found" })
                }
            }).
            catch(err => console.log(err))
    };



    render() {
        return (
            <div>
                <Card>
                    <Card.Text>
                        {this.state.error}
                    </Card.Text>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.category}
                            name="category"
                            placeholder="Enter Category"
                            onChange={this.handleChange} />
                        <input
                            type="submit"
                            value="Submit" />
                    </form>
                    <Card.Body>
                        {/* <Card.Title> {this.state.name} </Card.Title>
                        <Card.Text>
                            Cases Confirmed: {this.state.awardYear}
                        </Card.Text> */}
                        <Card.Text>
                            Category: {this.state.category}
                        </Card.Text>
                        {/* <Card.Text>
                            Total Recovered: {this.state.motivation}
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CardsByGenre;
