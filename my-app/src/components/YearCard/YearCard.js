import React from 'react';
import Card from 'react-bootstrap/Card';


const YearCard = (props) => (
    <div className="authorCard__main">
        <Card className="col bg-info mb-5">
            <Card.Body className="bg-light ">
            <Card.Title style={{ border: '1px solid red' }}>YEAR: {props.award} </Card.Title>
            </Card.Body>
        </Card>
    </div>
);

export default YearCard;
