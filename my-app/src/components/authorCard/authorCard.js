import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const authorCard = (props) => (

    <Card  style={{ width: '20rem', margin: '10px'}}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title>YEAR: {props.e}</Card.Title>
            <Card.Text>Category: {props.category}</Card.Text>
            <Card.Text>Name: {props.name}</Card.Text>
           {/*  <Card.Text>Motivation: {props.motivation}</Card.Text> */}
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
    </Card>
);

export default authorCard;
