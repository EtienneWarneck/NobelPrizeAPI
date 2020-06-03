import React, { useState, useEffect } from 'react';
// import './Buttons.css';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import WinnerCard from '../WinnerCard/WinnerCard'
import Button from '../Button/Button'

const Buttons = props => {
    // console.log(props);

    const [categoryState, setCategoryState] = useState({
        category: null
    });
    const [filteredCategoryState, setfilteredCategoryState] = useState({
        categoryFiltered: null
    });

    console.log(categoryState, filteredCategoryState);

    function fetchAPI() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}' + props.category)
            .then(response => {
                console.log("response", response);
                console.log("response.data", response.data);
                // const category = response.data;
                setCategoryState({
                    category: response.data.category
                });
                // console.log("test name", response.data[0].laureates[0].knownName.en)
                //SAME AS: console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
                // console.log("test category Chemistry=", response.data[0].category.en)
            }).
            catch(err => console.log(err))
    };

    const handleClick = () => (
        fetchAPI()
    )

    function categoryClickHandle(e) {
        e.preventDefault();
        console.log("this button was clicked")

        // setCategoryState({
        //     category: props.name
        // })
    }

    // const categories = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];

    // const categoriesButtons = categories.map((button) =>
    //     <button key={button.toString()} value={props.category} category={props.setCategoryState} onClick={handleClick} >{button}</button>
    // )

    // console.log("category", category);

    return (
        <div>
            <Button id="1" name="Physics" type="button" value="Physics" onClick={categoryClickHandle} />
            <Button id="2" name="Peac" type="button" value="Peace" onClick={categoryClickHandle} />

        </div>
        // <div className="container__main">
        //     <section className="container__section">
        //         {categoriesButtons}
        //onClick={() => showCategory()}

        // <div className="categories">
        //     {/* <Button className="btn btn-light m-5 border-dark" category={categoryState} onClick={handleClick}>Physics</Button> */}
        //     {categoriesButtons}
        // </div>

    );
}
export default Buttons;
