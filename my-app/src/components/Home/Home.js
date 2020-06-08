import React from 'react';
// import Buttons from '../Buttons/Buttons'
// import Button from 'react-bootstrap/Button';
import Buttons from '../Buttons/Buttons';
// import CardsDisplay from '../CardsDisplay/CardsDisplay'
import WinnerCard from '../WinnerCard/WinnerCard';

// import Selected from "../pages/selected";


function Home() {
    return (
        <div>
            <div className="spacer"></div>
            <Buttons />
            <WinnerCard/>
        </div>
    )
}

export default Home;
