import React from 'react';
import './ButtonList.css';

function ButtonList(props) {
    console.log(props);

    const buttons = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];

    const listValues = buttons.map((button) =>
        <button key={button.toString()} >
            {button}
        </button>)

    return (
        <div className="container__main">
            <section className="container__section">
                {listValues}
            </section>
        </div>
    );
}
export default ButtonList;
