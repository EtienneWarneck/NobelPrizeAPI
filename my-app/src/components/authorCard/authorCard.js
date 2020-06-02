import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import './AuthCard.css';

const authorCard = (props) => (
    <div className="authorCard__main">
        {/* <Card class="col mb-5">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body class="bg-light ">
                <Card.Title style={{ border: '1px solid red' }}>YEAR: {props.award} </Card.Title>
            </Card.Body>
        </Card> */}

        <Card className="col bg-info mb-5">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body className="bg-light ">
            <Card.Title style={{ border: '1px solid red' }}>YEAR: {props.award} </Card.Title>

                {/* <Card.Title style={{ border: '1px solid red'}}>YEAR: {props.award} </Card.Title> */}
                <Card.Text>Name: {props.name}</Card.Text>
                <Card.Text>CATEGORY: {props.category}</Card.Text>
                {/* <Card.Text>ID: {props.id}</Card.Text> */}
                {/*  <Card.Text>Motivation: {props.motivation}</Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    </div>
);

export default authorCard;
