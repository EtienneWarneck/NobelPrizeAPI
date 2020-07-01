import React, { Component } from 'react';
import axios from 'axios';
import classes from './CardsCategory.module.css';
import WinnerCard from '../../components/WinnerCard/WinnerCard'
import HomeButtons from "../HomeButtons/HomeButtons"
import buttonCategory from "../../components/ButtonCategory/ButtonCategory"
import SearchBar from '../../components/SearchBar/SearchBar';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


// const StyledDiv = styled.div`
// border: 10px solid orange;
// display: inline;
// `

class Cards extends Component {
    state = {
        allCards: [],
        category: null,
        search: ''
    }

    componentDidMount() {
        console.log("CARDS CATEGORY", this.props)
        let category = this.props.match.params.category_name;

        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=2&sort=desc&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
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

    //for search bar
    onChange = event => {
        console.log("ON CHANGE", event.target.value)
        this.setState({ search: event.target.value })
    }

    // onSubmit = 

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
        });

        //Filter on allCards or on cards??
        const filter = this.state.allCards.filter(a => {
            // return a.laureates[0].knowName?.en.toLowerCase().includes(this.state.search.toLowerCase())
            return a.laureates[0].knowName?.en.toLowerCase().indexOf(this.state.search) !== -1;
        })

        const style = { display: 'inline', border: '10px solid orange', width: '100px' };

        return (
            <div style={style}>
                {/* <StyledDiv> */}
                {/* <HomeButtons /> */}
                {/* </StyledDiv> */}
                <div>
                    {/* <SearchBar/>*/}
                    <Form className="form-row p-0 m-3 mt-5 mb-5 justify-content-center" >
                        <Form.Label htmlFor="" className="col-form-label text-right col-auto text-uppercase font-weight-normal">Year :</Form.Label>
                        <Form.Control type="text" placeholder="" className="col-2 text-center font-weight-bold border-dark " />
                        <Form.Label htmlFor="" className="col-form-label ml-2 text-right col-auto font-weight-normal">NAME :</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            className="col-4 font-weight-bold border-dark"
                            onChange={this.onChange}
                            value={this.state.search}
                        // x={this.filter}
                        />
                        {/* <Button
                            type="submit"
                            variant="btn ml-4 col-2 outline-dark border-dark gold"
                            onSubmit={this.onSubmit}
                        >SEARCH</Button> */}
                    </Form>
                </div>
                <div>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Cards;
