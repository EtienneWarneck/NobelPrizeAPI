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
        search: '',
        cancel: ''
    }


    // renderCard = card => {
    //     const { search } = this.state;
    //     var code = country.code.toLowerCase();

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

    onClick = e => {
        // this.onChange();
        // e.preventDefault();
        console.log("ON CLICK", this.state);
        let category = this.props.match.params.category_name;
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?sort=desc&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
            .then(res => {
                const categoryData = res.data.nobelPrizes;
                this.setState({
                    allCards: categoryData,
                    // category: this.props.match.params.category_name,

                })
            }).
            catch(err => console.log(err))
    }

    render() {
        const { search, allCards } = this.state;

        let filterCardsbyYear = allCards.filter(card => {
            // return card.laureates[0].knowName?.en.toLowerCase().includes(search.toLowerCase) !== -1;
            // return card.awardYear.includes(search.toLowerCase) !== -1;
            if (search === card.awardYear) {
            return card.awardYear.includes(search.toLowerCase) !== -1;
            }
        })
        console.log("FILTER CARDS", filterCardsbyYear);

        let cards = filterCardsbyYear.map((card) => {
            return <WinnerCard
                key={card.id}
                awardYear={card.awardYear}
                category={card.category.en}
                name={card.laureates[0].knownName?.en}
                motivation={card.laureates[0].motivation?.en}
            />
        });

        const style = { display: 'inline', border: '10px solid orange', width: '100px' };

        return (
            <div>
                {/* <StyledDiv> */}
                {/* <HomeButtons /> */}
                {/* </StyledDiv> */}
                <div>
                    {/* <SearchBar />*/}
                    <Form className="form-row p-0 m-3 mt-5 mb-5 justify-content-center" >
                        <Form.Label htmlFor="" className="col-form-label text-right col-auto text-uppercase font-weight-normal">Year :</Form.Label>
                        <Form.Control type="text" placeholder="" className="col-2 text-center font-weight-bold border-dark " />
                        <Form.Label htmlFor="" className="col-form-label ml-2 text-right col-auto font-weight-normal">NAME :</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            className="col-4 font-weight-bold border-dark"
                            value={this.state.search}
                            onChange={this.onChange}
                        />
                        <Button
                            type="button"
                            variant="btn ml-4 col-2 outline-dark border-dark gold"
                            onClick={this.onClick}
                        >SEARCH</Button>
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
