import React, { Component } from 'react';
import axios from 'axios';
// import classes from './CardsCategory.module.css';
import WinnerCard from '../../components/WinnerCard/WinnerCard'
// import HomeButtons from "../HomeButtons/HomeButtons"
// import buttonCategory from "../../components/ButtonCategory/ButtonCategory"
import SearchBar from '../../components/SearchBar/SearchBar';
import ShowAll from '../../components/ShowAll/ShowAll'
// import styled from 'styled-components';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// const StyledDiv = styled.div`
// border: 10px solid orange;
// display: inline;
// `

class Cards extends Component {
    state = {
        allCards: [],
        allCardsNP: [],
        category: null,
        searchYear: '',
        searchYearNP: '',
        searchName: '',
        searchNameNP: '',
    }

    // async componentDidMount() {
    //     console.log("[CardsCategory.js] ComponentDidMount this.props:", this.props)
    //     let category = this.props.match.params.category_name;
    //    await axios.get(`http://api.nobelprize.org/2.0/nobelPrizes?limit=3&sort=desc&nobelPrizeCategory=${category}`)
    //         .then(res => {
    //             const data = res.data;
    //             const yearMatch = res.data.nobelPrizes[0]?.awardYear
    //             console.log('[CardsCategory.js] yearMatch:', yearMatch)
    //             this.setState({
    //                 allCards: data.nobelPrizes,
    //                 //fetch category from the API that your router provides
    //                 category: category,
    //                 searchYear: yearMatch

    //             })
    //         }).catch(err => console.log(err))
    // };

    //Search all with nobelPrizes API
    onClickAll = async (searchYear, searchName) => {
        // e.preventDefault();
        console.log("[CardsCategory.js] onClickAll this.state: ", this.state);
        console.log("[[CardsCategory.js] onClickAll this.props: ", this.props);
        let category = this.props.match.params.category_name;
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=200&sort=desc&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
            .then(res => {
                const categoryData = res.data.nobelPrizes;

                const yearMatchNP = res.data.nobelPrizes[0]?.awardYear
                console.log('[CardsCategory.js] onClickAll yearMatch:', yearMatchNP)

                this.setState({
                    allCardsNP: categoryData,
                    searchYearNP: yearMatchNP,
                    category: this.props.match.params.category_name,
                })
            })
            .catch(err => console.log(err))
        this.clearResults();
    }

    //Search laureates with laureates API
    searchAll = async (searchYear, searchName) => {
        console.log('[CardsCategory.js] searchAll searchName:', searchName)
        console.log('[CardsCategory.js] searchAll searchYear:', searchYear)
        let category = this.props.match.params.category_name;
        // console.log('[CardsCategory.js] category:', category)

        await axios.get(`http://api.nobelprize.org/2.0/laureates?limit=200&name=${searchName}&nobelPrizeYear=${searchYear}&nobelPrizeCategory=${category}`)
            .then(res => {
                const data = res.data.laureates;
                console.log('[CardsCategory.js] searchAll res.data.laureates:', data)

                // const nameMatch = res.data.laureates[0]?.knownName?.en 
                // console.log('[CardsCategory.js] nameMatch:', nameMatch)

                const yearMatch = res.data.laureates[0]?.nobelPrizes[0]?.awardYear
                console.log('[CardsCategory.js] searchAll yearMatch:', yearMatch)

                this.setState({
                    allCards: data,
                    // searchName:  nameMatch,
                    searchYear: yearMatch
                })
            })
            .catch(err => console.log(err));
        this.clearResultsNP();

    };


    clearResults = (clearResults) => {
        this.setState({
            allCards: [],
        });
    }

    clearResultsNP = (clearResultsNP) => {
        this.setState({
            allCardsNP: []
        })
    }

    // handleSubmit = e => {
    //     console.log("SUBMIT")
    //     this.componentDidMount()
    //     e.preventDefault();
    // }

    render() {
        const { searchName, searchNameNP, allCards, allCardsNP } = this.state;

        //filter and map Year and Name with Laureates API
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
                    gender={card.gender}
                    motivation={card.nobelPrizes[0]?.motivation?.en}
                />
            });

        //filter and map All laureates with nobelPrizes API
        let filterCardsNP = allCardsNP.filter(cardNP => {
            return (
                cardNP.laureates ?
                    cardNP.laureates[0]?.knownName?.en.toLowerCase().includes(searchNameNP.toLowerCase()) ||
                    cardNP.laureates[1]?.knownName?.en.toLowerCase().includes(searchNameNP.toLowerCase()) ||
                    cardNP.laureates[2]?.knownName?.en.toLowerCase().includes(searchNameNP.toLowerCase())
                    : console.log("PROBLEM NP ...")
            )
        })
            .map((cardNP) => {
                return <WinnerCard
                    key={cardNP.id}
                    awardYear={cardNP.awardYear}
                    category={cardNP.category?.en}
                    name={cardNP.laureates[0]?.knownName?.en}
                    name1={cardNP.laureates[1]?.knownName?.en}
                    name2={cardNP.laureates[2]?.knownName?.en}
                    motivation={cardNP.laureates[0]?.motivation?.en}
                />
            });

        // const style = { display: 'inline', border: '10px solid orange', width: '100px' };

        return (
            <div>
                {/* <StyledDiv> */}
                {/* <HomeButtons /> */}
                {/* </StyledDiv> */}
                <div>
                    <ShowAll
                        onClickAll={this.onClickAll}
                        clearResultsNP={this.clearResultsNP}
                        showResetNP={allCardsNP.length > 0 ? true : false}
                    />
                    <SearchBar
                        searchAll={this.searchAll}
                        clearResults={this.clearResults}
                        showReset={allCards.length > 0 ? true : false} />
                </div>
                <div>
                    {filterCards}
                    {filterCardsNP}
                </div>
            </div >
        )
    }
}

export default Cards;
