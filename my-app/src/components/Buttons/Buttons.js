import React, { useState, useEffect } from 'react';
// import './Buttons.css';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import WinnerCard from '../WinnerCard/WinnerCard'
import Button from '../Button/Button'

const Buttons = props => {
    // console.log(props);

    // const [categoryState, setCategoryState] = useState('arrayCat');
    // const [filteredCategoryState, setfilteredCategoryState] = useState({
    //     categoryFiltered: null
    // });

    // console.log(categoryState, filteredCategoryState);

    function getData() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}' + props.category)
            .then(response => {
                console.log("response", response);
                console.log("response.data", response.data);
                // const category = response.data;
                // setCategoryState({
                //     category: response.data.category
                // });
                // console.log("test name", response.data[0].laureates[0].knownName.en)
                //SAME AS: console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
                // console.log("test category Chemistry=", response.data[0].category.en)
            }).
            catch(err => console.log(err))
    };

    const handleClick = () => (
        getData()
    )

    const categories = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];

    const categoriesButtons = categories.map((category) =>
        <button key={category.toString()} onClick={handleClick} >{category}</button>
        // key is "Physics ..."
    )
    console.log("categoriesButtons", categoriesButtons);

    return (
        <div className="categories">
            {categoriesButtons}
        </div>
    );
}

export default Buttons;
