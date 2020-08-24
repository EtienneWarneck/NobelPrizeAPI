import React from 'react';
import Card from 'react-bootstrap/Card';
import './WinnerCard.css';
// import Button from 'react-bootstrap/Button';
// import Buttons from '../Buttons/Buttons'

function WinnerCard(props) {
    // console.log("[WinnerCard.js] Props", props)
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <Card className="cols-12 col-md-8 p-0 m-4 mb-3 gold border-dark">
                    <Card.Header className="text-black" as="h5">{props.category} Laureate </Card.Header>
                    <Card.Body className="white">
                        {/* <Card.Subtitle>{props.awardYear}</Card.Subtitle> */}
                        <Card.Title className="ml-3 mb-1 " as="h5">{props.awardYear}</Card.Title>
                        <Card.Title className=" mt-1 ml-3" as="h2" >{props.name}</Card.Title>
                        <Card.Title className=" mt-1 ml-3" as="h2" >{props.name1}</Card.Title>
                        <Card.Title className=" mt-1 ml-3" as="h2" >{props.name2}</Card.Title>
                        {/* <Card.Text className=" m-3" as="h5" >{props.gender}</Card.Text> */}
                        <Card.Text className=" m-3" as="h5"><b>Motivation :</b> "{props.motivation}"</Card.Text>
                        {/* <Card.Text className=" m-3" as="h5"><b>Warning :</b>{props.awardYear < "1901" ? <Card.Text>Warning</Card.Text>: null} </Card.Text> */}
                    </Card.Body>
                    {/* <Card.Footer></Card.Footer> */}
                </Card>
            </div>
        </div>
    )
}

export default WinnerCard;
