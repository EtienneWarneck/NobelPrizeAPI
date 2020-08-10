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
    //     console.log("[CardsCategory.js] ComponentDidMount", this.props)
    //     let category = this.props.match.params.category_name;

    //     await axios.get('http://api.nobelprize.org/2.0/laureates?limit=200&sort=desc&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
    //         .then(res => {
    //             const categoryData = res.data;
    //             console.log("[CardsCategory.js] categoryData: ", categoryData)
    //             const categoryData2 = res.data.laureates;
    //             console.log("[CardsCategory.js] categoryData2: ", categoryData2)
    //             // console.log("CATEGORY", categoryData?.category?.en)
    //             const yearTest = categoryData2[0]?.nobelPrizes[0]?.awardYear;
    //             console.log("[CardsCategory.js] yearTest", yearTest)
    //             this.setState({
    //                 allCards: categoryData,
    //                 //<fetch category from the API that your router provides>
    //                 category: this.props.match.params.category_name,
    //             })
    //         }).
    //         catch(err => console.log(err))
    // };

    // searchByYear = async (searchYear) => {
    //     let category = this.props.match.params.category_name;
    //     await axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=200&sort=desc&nobelPrizeYear=' + searchYear + '&nobelPrizeCategory=' + category + '&format=json&csvLang=en')
    //         .then(res => {
    //             const data = res.data.nobelPrizes;
    //             console.log('[CardsCategory.js] data Year', data)
    //             const yearMatch = res.data.nobelPrizes[0]?.awardYear
    //             console.log('[CardsCategory.js] yearMatch', res.data.nobelPrizes[0]?.awardYear)
    //             this.setState({
    //                 allCards: data,
    //                 searchYear: yearMatch
    //                 // category: this.props.match.params.category_name,
    //             })
    //         })
    //         .catch(err => console.log(err))
    // };

    // searchByName = async (searchName, searchYear) => {
    //     let category = this.props.match.params.category_name;
    //     await axios.get('http://api.nobelprize.org/2.0/laureates?name=' + searchName + '&nobelPrizeYear=' + searchYear + '&nobelPrizeCategory' + category)
    //         .then(res => {
    //             const data = res.data.laureates;
    //             console.log('[CardsCategory.js] data Name', data)
    //             const nameMatch = res.data.laureates[0]?.knownName
    //             console.log('[CardsCategory.js] nameMatch', nameMatch)
    //             this.setState({
    //                 allCards: data,
    //                 searchName: nameMatch
    //             })
    //         })
    //         .catch(err => console.log(err))
    // };

    //Search laureates
    searchAll =  async (searchYear, searchName) => {
        console.log('[CardsCategory.js] searchName', searchName)
        console.log('[CardsCategory.js] searchYear', searchYear)
        let category = this.props.match.params.category_name;
        // console.log('[CardsCategory.js] category:', category)
    //    await  axios.get('http://api.nobelprize.org/2.0/laureates?name=' + searchName + '&nobelPrizeYear=' + searchYear + '&nobelPrizeCategory' + category)
      // http://api.nobelprize.org/2.0/laureates?name=Einstein&nobelPrizeYear=1921&nobelPrizeCategory=phy
    await  axios.get(`http://api.nobelprize.org/2.0/laureates?name=${searchName}&nobelPrizeYear=${searchYear}&nobelPrizeCategory=${category}`)
            .then(res => {
                const data = res.data.laureates;
                console.log('[CardsCategory.js] data:', data)
                
                const nameMatch = res.data.laureates[0]?.knownName?.en
                console.log('[CardsCategory.js] nameMatch', nameMatch)
                
                const yearMatch = res.data.laureates[0]?.nobelPrizes[0]?.awardYear
                console.log('[CardsCategory.js] yearMatch', yearMatch)

                this.setState({
                    allCards: data,
                    searchName: nameMatch,
                    searchYear: yearMatch
                })
            })
            .catch(err => console.log(err))
    };

    // searchBy = (searchName, searchYear) => {
    //     let category = this.props.match.params.category_name;
    //     axios.get('http://api.nobelprize.org/2.0/laureates?name=' + searchName + '&nobelPrizeYear=' + searchYear + '&nobelPrizeCategory' + category)
    //         .then(res => {
    //             const data = res.data.laureates;
    //             console.log('[CardsCategory.js] data', data)

    //             const nameMatch = res.data.laureates[0]?.knownName
    //             console.log('[CardsCategory.js] nameMatch', nameMatch)
    //             // const yearMatch = res.data.laureates[0]?.nobelPrizes[0]?.awardYear
    //             // console.log('[CardsCategory.js] yearMatch', yearMatch)
    //             this.setState({
    //                 allCards: data,
    //                 searchName: nameMatch,
    //                 // searchYear: yearMatch

    //             })
    //         })
    //         .catch(err => console.log(err))
    // };


    clearResults = (clearResults) => {
        this.setState({
            allCards: []
        })
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
                // searchYear === card.awardYear  ?
                // card.awardYear && card.laureates ?
                //  card.laureates ?
                     console.log( '[CardsCategory.js] test', card.gender)

                    // card.knownName?.en.toLowerCase().includes(searchName.toLowerCase()) 
                    // card[1]?.knownName?.en.toLowerCase().includes(searchName.toLowerCase()) ||
                    // card.laureates[2]?.knownName?.en.toLowerCase().includes(searchName.toLowerCase())

                    // : console.log("PROBLEM ... ")
            )
        })

        let cards = filterCards.map((card) => {
            return <WinnerCard
                key={card.id}
                awardYear={card[0]?.nobelPrizes[0]?.awardYear}
                category={card[0]?.category.en}
                name={card[0]?.knownName?.en}
                // name1={card[1]?.laureates[1]?.knownName?.en}
                // name2={card[2]?.laureates[2]?.knownName?.en}
                motivation={card.laureates[0].nobelPrizes[0]?.motivation?.en}
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
                        // searchByYear={this.searchByYear}
                        // searchByName={this.searchByName}
                        clearResults={this.clearResults}
                        showReset={allCards.length > 0 ? true : false} />
                </div>
                <div>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Cards;
