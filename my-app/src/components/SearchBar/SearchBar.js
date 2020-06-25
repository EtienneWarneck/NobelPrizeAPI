import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function SearchBar() {
    return (

        <Form className="form-row p-0 m-3 mt-5 mb-5 justify-content-center">
            <Form.Label htmlFor="" className="col-form-label text-right col-auto">Year :</Form.Label>
            <Form.Control type="text" placeholder="" className="col-2 text-center "/>
            <Form.Label htmlFor="" className="col-form-label ml-2 text-right col-auto">Name :</Form.Label>
            <Form.Control type="text" placeholder="" className="col-4"/>
            <Button type="submit" className=" btn ml-4 col-2 gold">Search</Button>
        </Form>
    )
}

export default SearchBar;