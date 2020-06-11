import React, { useState, useEffect } from 'react';
// import './Buttons.css';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import WinnerCard from '../WinnerCard/WinnerCard'
import Button from '../Button/Button'



const Buttons = props => {
    // console.log(props);

    const [categoryState, setCategoryState] = useState({
        category: '',
        cardsData: []
    });
    // const [filteredCategoryState, setfilteredCategoryState] = useState({
    //     categoryFiltered: null
    // });

    // console.log(categoryState, filteredCategoryState);

    // function getData() {
    //     axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}' + props.category)
    //         .then(response => {
    //             console.log("response.data", response.data);
    //             // const category = response.data;
    //             setCategoryState({
    //                 category: response.data.category
    //             });
    //             // console.log("test name", response.data[0].laureates[0].knownName.en)
    //             //SAME AS: console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
    //             // console.log("test category Chemistry=", response.data[0].category.en)
    //         }).
    //         catch(err => console.log(err))
    // };
    // useEffect(()  => {
    //     axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/')
    //         .then(response => {
    //             console.log("response.data", response.data);
    //             // const category = response.data;
    //             setCategoryState({ category: categoriesButtons[0].props.value }); //render again
    //             // console.log("test name", response.data[0].laureates[0].knownName.en)
    //             //SAME AS: console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
    //             // console.log("test category Chemistry=", response.data[0].category.en)
    //         }).
    //         catch(err => console.log(err))
    // });

    function getData() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrizes')
            .then(response => {
                console.log("response.data", response.data.nobelPrizes);
                const category = response.data;
                const cardsData = response.data

                setCategoryState({
                    category: "",
                    cardsData: response.data
                });
                // console.log(setCategoryState);
                // console.log("test name", response.data[0].laureates[0].knownName.en)
                //SAME AS: console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
                // console.log("test category Chemistry=", response.data[0].category.en)
            }).
            catch(err => console.log(err))
    };

    const handleClick = () => (
        getData()
    )

    // const matchCategory = () => {
    //     //if value of the button matches category of API 
    //     if ( props.value === response.data[0].category.en ) {
    //         console.log(value)
    //     }
    // }

    const categories = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];

    const categoriesButtons = categories.map((category) =>
        <button
            key={category.toString()}
            type="button"
            value={category.toString()}
            onClick={handleClick}
        >
            {category}
        </button>
        // key is "Physics ..."
    )

    console.log("categoriesButtons", categoriesButtons);
    // console.log("categoriesButtons", categoriesButtons[0].props.value);
    // console.log("categoriesButtons", categoriesButtons[0].key);

    const test = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];
    const laureates = test.map((e) => 
        <WinnerCard
            key={e.toString()}
        value={e.toString()}
        award={e.awardYear}  // YEAR
        category={e.category?.en} // -- PRIZE CATEGORY -- //
        name={e.laureates[0].knownName?.en} 
        onClick={this.handleClick}
        // NAME OF WINNER
        // motivation={e.laureates[0].motivation?.en}
        // value={e.category}
        // award={e.award}  // YEAR
        />
    );

    return (
        <div className="categories">
            {categoriesButtons}
            {laureates}
        </div>
    );
}

export default Buttons;
