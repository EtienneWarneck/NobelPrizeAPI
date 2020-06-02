import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import './WinnerCard.css';

const winnerCard = (props) => (
    <div className="container">
        <Card className="col bg-light mb-5">
            <Card.Body className="bg-light">
                <Card.Text>{props.award} - {props.category}</Card.Text>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>"{props.motivation}"</Card.Text>
                <Card.Img variant="top" src="holder.js/100px180" />
            </Card.Body>
        </Card>
    </div>
);

export default winnerCard;
