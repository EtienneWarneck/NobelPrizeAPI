import React from 'react';
// import Buttons from '../Buttons/Buttons'
// import Button from 'react-bootstrap/Button';
import ButtonList from '../Buttons/ButtonList';
import Toolbar from "../Toolbar/Toolbar";
import Selected from "../pages/selected";


function welcome() {
    return (
        <div>
            <Toolbar />
            <div className="spacer"></div>
            <ButtonList />
        </div>
    )
}

export default welcome;
