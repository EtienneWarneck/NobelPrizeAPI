import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';

class SearchBar extends Component {
    state = {
        searchYear: '',
        searchName: ''
    }



    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("[SearchBar.js] onChange", e.target.value)
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.searchLaureates(this.state.searchYear);
        this.setState({
            searchYear: ''
        })
    }

    render() {



        return (

            <Form
                className="form-row p-0 m-3 mt-5 mb-5 justify-content-center"
                type="submit"
                onSubmit={this.onSubmit}
            >
                <Form.Label htmlFor="" className="col-form-label text-right col-auto text-uppercase font-weight-normal">Year :</Form.Label>
                <Form.Control
                    type="text"
                    className="col-2 text-center font-weight-bold border-dark"
                    name="searchYear"
                    value={this.state.searchYear}
                    onChange={this.onChange}
                // ref={input => this.inputField = input}
                // onFocus={() => this.inputField.value = ""}
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

                {/* <Button
                type="reset"
                variant="btn ml-4 col-1 outline-dark border-dark gold"
                onClick={this.onClickReset}
            >RESET</Button> */}
            </Form>
        )
    }
}

export default SearchBar;