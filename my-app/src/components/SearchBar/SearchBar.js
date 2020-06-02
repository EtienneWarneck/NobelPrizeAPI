import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SearchBar() {
    return (

        <Card className="bg-light ">
            <Form className="form-group form-row">
                <label htmlFor="" className="col-form-label text-md-left col md-2">Year:</label>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                {/* <Button type="submit">Submit</Button> */}
            {/* </Form>
            <Form inline> */}
            <label htmlFor="" className="col-form-label text-md-left col md-2">Name:</label>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit" className="">Submit</Button>
            </Form>
        </Card>
    )
}

export default SearchBar;