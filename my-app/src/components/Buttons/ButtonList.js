import React from 'react';
import './ButtonList.css';

function ButtonList(props) {
    console.log(props);

    // const buttons = ["Physics", "Chemistry", "Medicine", "Litterature", "Peace", "Economics"];
    const buttons1 = ["Physics", "Chemistry", "Medicine"];
    const buttons2 = ["Literature", "Peace", "Economics"];

    const listValues = buttons1.map((button) =>
        <button key={button.toString()} >
            {button.toUpperCase()}
        </button>)
    const listValues2 = buttons2.map((button) =>
        <button key={button.toString()} >
            {button.toUpperCase()}
        </button>)


    return (
        <div className="container__main">
            <section className="container__section">
                <article> {listValues}</article>
            </section>
            <section className="container__section">
                <article> {listValues2}</article>
            </section>
        </div>
    );
}
export default ButtonList;
