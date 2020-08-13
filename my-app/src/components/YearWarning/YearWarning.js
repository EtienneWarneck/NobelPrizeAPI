import React from 'react';
import Card from 'react-bootstrap/Card';
import './YearWarning.css';

function YearWarning(props) {
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <Card className="cols-12 col-md-8 p-0 m-4 mb-3 gold border-dark">
                    <Card.Header className="text-black" as="h5">{props.category} Laureate </Card.Header>
                    <Card.Body className="white">
                        <Card.Text className=" m-3" as="h5"><b>Warning :</b> Laureates Prizes start in 1901</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default YearWarning;
