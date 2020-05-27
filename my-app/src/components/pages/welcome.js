import React from 'react';
// import Buttons from '../Buttons/Buttons'
import Button from 'react-bootstrap/Button';
import ButtonList from '../Buttons/ButtonList';
import Toolbar from "../Toolbar/Toolbar"


function welcome() {
    return (
        <div>
            <Toolbar />
            <div className="spacer"></div>
            <main>
                <ButtonList></ButtonList>
            </main>
        </div>
    )
}

export default welcome;
