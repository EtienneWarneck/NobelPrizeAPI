import React from 'react';
// import Buttons from '../Buttons/Buttons'
// import Button from 'react-bootstrap/Button';
import Buttons from '../Buttons/Buttons';
import CardsDisplay from '../CardsDisplay/CardsDisplay'

// import Selected from "../pages/selected";


function Home() {
    return (
        <div>
            <div className="spacer"></div>
            <Buttons />
            <CardsDisplay/>
        </div>
    )
}

export default Home;
