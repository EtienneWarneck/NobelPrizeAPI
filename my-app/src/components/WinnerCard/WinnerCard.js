import React from 'react';
import Card from 'react-bootstrap/Card';
import './WinnerCard.css';
// import Button from 'react-bootstrap/Button';
// import Buttons from '../Buttons/Buttons'

function WinnerCard(props) {
    console.log("PROPS", props)
    return (
        <div>
            <Card className="col bg-light mb-2 mt-2">
                <Card.Body className="bg-light">
                    <Card.Title>Name: {props.name}</Card.Title>
                    <Card.Text>Award Year: {props.awardYear}</Card.Text>
                    <Card.Text>Category: {props.category}</Card.Text>
                    <Card.Text>Motivation:{props.motivation}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default WinnerCard;
