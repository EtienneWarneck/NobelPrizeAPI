import React from 'react';
import './ButtonList.css';

function ButtonList(props) {
    console.log(props);
    
    const buttons = ["Physics", "Chemistry", "Medicine", "Litterature", "Peace", "Economics"];

    const listValues = buttons.map((button) =>
        <button key={button.toString()} >
            {button}
        </button>)
return (
    <div>{listValues}</div>
);
}
export default ButtonList;
