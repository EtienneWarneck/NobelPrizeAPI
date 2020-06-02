import React from 'react';
import './ButtonList.css';
import axios from 'axios';
import Selected from '../pages/selected';

function ButtonList(props) {
    // console.log(props);

    const handleClick = (e) => {
        e.preventDefault();
        // console.log('The link was clicked.');
        axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/' + 'peace')
        .then(response => {
            console.log("response.data", response.data);
            // const nobelArray = response.data;
            // this.props({nobelArray});
        }).
        catch(err => console.log(err))
    }

    const categories = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];

    const categoriesButtons = categories.map((button) =>
        <button key={button.toString()} value={props.category} onClick={handleClick}>{button}</button>
    )

    return (
        <div className="container__main">
            <section className="container__section">
                {categoriesButtons}
            </section>
        </div>
    );
}
export default ButtonList;
