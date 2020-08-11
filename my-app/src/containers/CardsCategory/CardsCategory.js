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


    // async componentDidMount() {
    //     //     console.log("[CardsCategory.js] ComponentDidMount", this.props)
    //     let category = this.props.match.params.category_name;

    //     await axios.get(`http://api.nobelprize.org/2.0/laureates?limit=200&nobelPrizeCategory=${category}&format=json&csvLang=en`)
    //         .then(res => {
    //             this.setState({
    //                 allCards: res.data.laureates,
    //                 //<fetch category from the API that your router provides>
    //                 category: this.props.match.params.category_name,
    //             })
    //         }).
    //         catch(err => console.log(err))
    // };


    //Search laureates
    searchAll = async (searchYear, searchName) => {
        console.log('[CardsCategory.js] searchName:', searchName)
        console.log('[CardsCategory.js] searchYear:', searchYear)
        let category = this.props.match.params.category_name;
        // console.log('[CardsCategory.js] category:', category)

        await axios.get(`http://api.nobelprize.org/2.0/laureates?limit=200&name=${searchName}&nobelPrizeYear=${searchYear}&nobelPrizeCategory=${category}`)
            .then(res => {
                const data = res.data.laureates;
                console.log('[CardsCategory.js] res.data.laureates:', data)

                // const nameMatch = res.data.laureates[0]?.knownName?.en 
                // console.log('[CardsCategory.js] nameMatch:', nameMatch)

                const yearMatch = res.data.laureates[0]?.nobelPrizes[0]?.awardYear
                console.log('[CardsCategory.js] yearMatch:', yearMatch)

                this.setState({
                    allCards: data,
                    // searchName:  nameMatch,
                    searchYear: yearMatch
                })
            })
            .catch(err => console.log(err))
    };


    clearResults = (clearResults) => {
        this.setState({
            allCards: []
        })
    }

    // handleSubmit = e => {
    //     console.log("SUBMIT")
    //     this.componentDidMount()
    //     e.preventDefault();
    // }

    render() {
        const { searchYear, searchName, allCards } = this.state;

        let filterCards = allCards.filter(card => {
            return (
                card ?
                    card.knownName?.en.toLowerCase().includes(searchName.toLowerCase())  
                    : console.log("PROBLEM ...")
            )
        })
            .map((card) => {
                return <WinnerCard
                    key={card.id}
                     awardYear={card.nobelPrizes[0].awardYear}
                    category={card.nobelPrizes[0]?.category?.en}
                    name={card.knownName?.en}
                    motivation={card.nobelPrizes[0]?.motivation?.en}
                />
            });

        // const style = { display: 'inline', border: '10px solid orange', width: '100px' };

        return (
            <div>
                {/* <StyledDiv> */}
                {/* <HomeButtons /> */}
                {/* </StyledDiv> */}
                <div>
                    <SearchBar
                        searchAll={this.searchAll}
                        clearResults={this.clearResults}
                        showReset={allCards.length > 0 ? true : false} />
                </div>
                <div>
                    {filterCards}
                </div>
            </div >
        )
    }
}

export default Cards;
