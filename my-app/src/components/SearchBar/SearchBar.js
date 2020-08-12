import React, { Component } from 'react';
// import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import PropTypes from 'prop-types'

class SearchBar extends Component {
    state = {
        searchYear: '',
        searchName: '',
        category: ''
    }

    static propTypes = {
        searchAll: PropTypes.func.isRequired,
        // onClickAll: PropTypes.func.isRequired,
        clearResults: PropTypes.func.isRequired,
        showReset: PropTypes.bool.isRequired,
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

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("[SearchBar.js] onChange", e.target.value)
    }

    onSubmit = e => {
        e.preventDefault();
        //Sending the values to the parent
        this.props.searchAll(this.state.searchYear, this.state.searchName)
        //then remove values
        this.setState({
            searchYear: '',
            searchName: '',
            category: null,
        })
    }
    // onSubmit2 = e => {
    //     e.preventDefault();
    //     //Sending the values to the parent
    //     this.props.onClickAll(this.state.searchYear, this.state.searchName)
    //     //then remove values
    //     this.setState({
    //         searchYear: '',
    //         searchName: '',
    //         category: null,
    //     })
    // }

    // onSubmitAll = e => {
    //     e.preventDefault();
    //     //Sending the values to the parent
    //     this.props.onClickAll(this.state.searchYear, this.state.searchName)
    //     //then remove values
    //     this.setState({
    //         searchYear: '',
    //         searchName: '',
    //     })
    // }

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

    // onClickReset = e => {
    //     this.setState({
    //         allCards: [],
    //     });
    // }

    render() {
        const { clearResults, showReset } = this.props;
        return (
            <Form
                className="form-row p-0 m-3 mt-5 mb-5 justify-content-center"
                type="submit"
                onSubmit={this.onSubmit}
            >
                <Form.Label 
                htmlFor="" className="col-form-label text-right col-auto text-uppercase font-weight-normal">Year :</Form.Label>
                <Form.Control
                    type="text"
                    className="col-2 text-center font-weight-bold border-dark"
                    name="searchYear"
                    value={this.state.searchYear}
                    onChange={this.onChange}
                    ref={input => this.inputField = input}
                    onFocus={() => this.inputField.value = ''}
                />

                <Form.Label htmlFor="" className="col-form-label ml-2 text-right col-auto font-weight-normal">NAME :</Form.Label>
                <Form.Control
                    type="text"
                    className="col-4 font-weight-bold border-dark"
                    name="searchName"
                    value={this.state.searchName}
                    onChange={this.onChange}
                    
                />

                <Button
                    type="submit"
                    onSubmit={this.onSubmit}
                    variant="btn ml-4 col-1 outline-dark border-dark gold"
                // onClick={this.onClickSearch}
                // onSubmit={() => this.handleSubmit()}
                >SEARCH</Button>

                {showReset && (
                    <Button
                        type="reset"
                        variant="btn ml-4 col-1 outline-dark border-dark gold"
                        onClick={clearResults}
                    >RESET</Button>
                )}
            </Form>
        )
    }
}

export default SearchBar;