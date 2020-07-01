import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';

class SearchBar extends Component {
    state = {
        search: ''
    }

    onChange = e => {
        this.setState({ search: e.target.value })
    }

    render() {



        return (

            <Form className="form-row p-0 m-3 mt-5 mb-5 justify-content-center" >
                <Form.Label htmlFor="" className="col-form-label text-right col-auto text-uppercase font-weight-normal">Year :</Form.Label>
                <Form.Control type="text" placeholder="" className="col-2 text-center font-weight-bold border-dark " />
                <Form.Label htmlFor="" className="col-form-label ml-2 text-right col-auto font-weight-normal">NAME :</Form.Label>
                <Form.Control
                    type="text"
                    placeholder=""
                    className="col-4 font-weight-bold border-dark"
                    onChange={this.props.onChange}
                />
                <Button type="submit" variant="btn ml-4 col-2 outline-dark border-dark gold">SEARCH</Button>
            </Form>
        )
    }
}

export default SearchBar;