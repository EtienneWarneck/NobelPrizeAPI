import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import PropTypes from 'prop-types'

class ShowAll extends Component {
    state = {
        searchYear: '',
        searchName: '',
        category: ''
    }

    static propTypes = {
        onClickAll: PropTypes.func.isRequired,
        clearResultsNP: PropTypes.func.isRequired,
        showResetNP: PropTypes.bool.isRequired,

    }

    // componentDidMount(e) {
    //     console.log( '[SearhBar.js] CDM this.props:', this.props)
    //     console.log("[SearchBar.js] CDM this.state: ", this.state);
    //     let category = this.props.match.params.category_name;
    //     axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=3&sort=desc&nobelPrizeCategory=' + this.props.category + '&format=json&csvLang=en')
    //         .then(res => {
    //             const categoryData = res.data.nobelPrizes;
    //             this.setState({
    //                 allCards: categoryData,
    //                 category: this.props.match.params.category_name,
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }

    onSubmit = e => {
        e.preventDefault();
        //Sending the values to the parent
        this.props.onClickAll()
        //then remove values
        this.setState({
            searchYear: '',
            searchName: '',
            category: null,
        })
    }


    // onClickAll = e => {
    //     e.preventDefault();
    //     console.log("[SearchBar.js] onClickAll this.state: ", this.state);
    //     console.log("[SearchBar.js] onClickAll this.props: ", this.props);
    //     // let category = this.props.match.params.category_name;
    //     axios.get('http://api.nobelprize.org/2.0/nobelPrizes?limit=3&sort=desc&nobelPrizeCategory=' + this.props.category + '&format=json&csvLang=en')
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
            allCardsNP: [],
        });
    }

    render() {
        const { clearResultsNP, showResetNP } = this.props;
        return (
            <Form
                className="form-row p-0 m-3 mt-5 mb-5 justify-content-center"
                type="submit"
                onSubmit={this.onSubmit}

            >
                <Button
                    type="submit"
                    variant="btn ml-4 col-4 outline-dark border-dark gold"
                    onSubmit={this.onSubmit}
                // onSubmit={() => this.handleSubmit()}
                >SHOW ALL LAUREATES BY YEAR</Button>

                {showResetNP && (
                    <Button
                        type="reset"
                        variant="btn ml-4 col-1 outline-dark border-dark gold"
                        onClick={clearResultsNP}
                    >RESET ALL</Button>
                )}
            </Form>
        )
    }
}

export default ShowAll;