import React from 'react';
import Card from 'react-bootstrap/Card';
import './WinnerCard.css';
// import Button from 'react-bootstrap/Button';
// import Buttons from '../Buttons/Buttons'

function WinnerCard(props) {
    console.log("PROPS from WinnerCard", props)
    return (
        <div className='container'>
            <div className="row justify-content-center">
            <Card className="cols-12 col-md-8 p-0 m-4 mb-3 gold">
                <Card.Header className="text-black" as="h5">{props.category} Laureate {props.awardYear}</Card.Header>
                <Card.Body className="white">
                    {/* <Card.Title className="m-3 text-muted">aaaa</Card.Title> */}
                    <Card.Title  className="m-3" as="h2">{props.name}</Card.Title>
                    <Card.Text className=" m-3" as="h5">{props.motivation}</Card.Text>
                    {/* <Card.Subtitle></Card.Subtitle> */}
                </Card.Body>
                {/* <Card.Footer></Card.Footer> */}
            </Card>
            </div>
        </div>
    )
}

export default WinnerCard;
