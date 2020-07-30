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
        searchYear: '',
        searchName: ''
    }


    // renderCard = card => {
    //     const { search } = this.state;
    //     var code = country.code.toLowerCase();

    componentDidMount() {
        console.log("COMPODIDMOUNT Cards Category", this.props)
        let category = this.props.match.params.category_name;

        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=120&sort=desc&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
            .then(res => {
                const categoryData = res.data.nobelPrizes;
                console.log("categoryData", res.data.nobelPrizes)
                // console.log("CATEGORY", categoryData?.category?.en)

                this.setState({
                    allCards: categoryData,
                    //<fetch category from the API that your router provides>
                    category: this.props.match.params.category_name,
                })
            }).
            catch(err => console.log(err))
    };

    onChangeYear = e => {
        e.preventDefault(); //???
        console.log("ON CHANGE", e.target.value)
        console.log("ON CHANGE prevent", e.preventDefault)
        this.setState({
            searchYear: e.target.value
        });
    }
    onChangeName = e => {
        e.preventDefault(); //???
        // console.log("ON CHANGE", e.target.value)
        this.setState({
            searchName: e.target.value
        })
    }

    onClickSearch = e => {
        // e.preventDefault(); //???
        console.log("ON CLICK", this.state);
        let category = this.props.match.params.category_name;
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=120&sort=desc&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
            .then(res => {
                const categoryData = res.data.nobelPrizes;
                this.setState({
                    allCards: categoryData,
                    // category: this.props.match.params.category_name,
                })
            }).
            catch(err => console.log(err))
    }

    onClickReset = e => {
        this.setState({
            allCards: [],
            searchYear: '',
            searchName: '',

        });
    }

    handleSubmit = e => {
        console.log("SUBMIT")
        e.preventDefault();
        this.setState({
            searchYear: '',
            searchName: ''
        });

    }

    render() {
        const { searchYear, searchName, allCards } = this.state;

        let filterCards = allCards.filter(card => {

            // return card.laureates.indexOf(searchName) !== -1

            return (
                // searchYear == card.awardYear || !searchYear && card.laureates && card.laureates <= 3 ?
                searchYear === card.awardYear || (!searchYear && card.laureates) ?

                    card.laureates[0]?.knownName?.en.toLowerCase().includes(searchName.toLowerCase()) ||
                    card.laureates[1]?.knownName?.en.toLowerCase().includes(searchName.toLowerCase()) ||
                    card.laureates[2]?.knownName?.en.toLowerCase().includes(searchName.toLowerCase())
                    : null
            )
        })

        let cards = filterCards.map((card) => {
            return <WinnerCard
                key={card.id}
                awardYear={card.awardYear}
                category={card.category.en}
                name={card.laureates[0]?.knownName?.en}
                name1={card.laureates[1]?.knownName?.en}
                name2={card.laureates[2]?.knownName?.en}
                motivation={card.laureates[0].motivation?.en}
            />
        });

        // const style = { display: 'inline', border: '10px solid orange', width: '100px' };

        return (
            <div>
                {/* <StyledDiv> */}
                {/* <HomeButtons /> */}
                {/* </StyledDiv> */}
                <div>
                    {/* <SearchBar />*/}
                    <Form
                        className="form-row p-0 m-3 mt-5 mb-5 justify-content-center"
                        type="submit"
                        value="Submit"
                        onSubmit={this.handleSubmit}
                    >
                        <Form.Label htmlFor="" className="col-form-label text-right col-auto text-uppercase font-weight-normal">Year :</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            className="col-2 text-center font-weight-bold border-dark"
                            value={this.state.searchYear}
                            onChange={this.onChangeYear}
                        />
                        <Form.Label htmlFor="" className="col-form-label ml-2 text-right col-auto font-weight-normal">NAME :</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            className="col-4 font-weight-bold border-dark"
                            value={this.state.searchName}
                            onChange={this.onChangeName}
                        />
                        <Button
                            type="button"
                            variant="btn ml-4 col-1 outline-dark border-dark gold"
                            onClick={this.onClickSearch}
                        >SEARCH</Button>
                        <Button
                            type="button"
                            variant="btn ml-4 col-1 outline-dark border-dark gold"
                            onClick={this.onClickReset}
                        >RESET</Button>
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
