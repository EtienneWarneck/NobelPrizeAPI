import React from 'react';
import './Buttons.css';
import ButtonList from './ButtonList';

function Buttons(props) {
    return (
        <div>
            <div className="spacer"></div>
            <ButtonList button={props.button}></ButtonList>
        </div>
    )
}

export default Buttons;
