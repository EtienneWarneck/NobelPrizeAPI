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

    // async componentDidMount() {
    //     console.log("[CardsCategory.js] ComponentDidMount", this.props)
    //     let category = this.props.match.params.category_name;

    //     await axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=2&sort=desc&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
    //         .then(res => {
    //             const categoryData = res.data.nobelPrizes;
    //             // console.log("categoryData", res.data.nobelPrizes)
    //             // console.log("CATEGORY", categoryData?.category?.en)

    //             this.setState({
    //                 allCards: categoryData,
    //                 //<fetch category from the API that your router provides>
    //                 category: this.props.match.params.category_name,
    //             })
    //         }).
    //         catch(err => console.log(err))
    // };



    // onClickSearch = e => {
    //     e.preventDefault();
    //     console.log("ON CLICK", this.state);
    //     let category = this.props.match.params.category_name;
    //     axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=120&sort=desc&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
    //         .then(res => {
    //             const categoryData = res.data.nobelPrizes;
    //             this.setState({
    //                 allCards: categoryData,
    //                 // category: this.props.match.params.category_name,
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }

    onClickReset = e => {
        this.setState({
            // allCards: [],
            searchYear: '',
            searchName: '',

        });
    }

    searchLaureates = (searchYear) => {
        let category = this.props.match.params.category_name;
        
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=120&sort=desc&nobelPrizeYear=' + searchYear + '&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
            .then(res => {
                console.log("HERE", res.data.nobelPrizes[0]?.awardYear)
                const categoryData = res.data.nobelPrizes;
                const yearMatch = res.data.nobelPrizes[0]?.awardYear
                this.setState({
                    allCards: categoryData,
                    searchYear: yearMatch
                    // category: this.props.match.params.category_name,
                })
            })
            .catch(err => console.log(err))
    }

    // handleSubmit = e => {
    //     console.log("SUBMIT")
    //     // alert('A name was submitted: ' + this.state.value);
    //     let category = this.props.match.params.category_name;
    //     axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=120&sort=desc&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
    //         .then(res => {
    //             const categoryData = res.data.nobelPrizes;
    //             this.setState({
    //                 allCards: categoryData,
    //                 searchYear: e.target.value
    //                 // category: this.props.match.params.category_name,
    //             })
    //         })
    //         .catch(err => console.log(err))
    //     e.preventDefault();
    // }

    render() {
        const { searchYear, searchName, allCards } = this.state;

        let filterCards = allCards.filter(card => {


            return (
                // searchYear === card.awardYear || (!searchYear && card.laureates) ?
                searchYear === card.awardYear  ?


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
                    <SearchBar searchLaureates={this.searchLaureates} />
                </div>
                <div>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Cards;
