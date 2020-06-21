import React, { Component } from 'react'
// import axios from 'axios';
import './HomeButtons.css';
import ButtonCategory from '../../components/ButtonCategory/ButtonCategory'

//RESTRUCTURING TO SINGLE OUT THE CATEGORIES BUTTONS 
class HomeButtons extends Component {

    handleClick = (buttonValue) => {
        console.log("PROPS HomeButtons", this.props)
        // only 3 first letters of the button to match category in the API:
        buttonValue = buttonValue.slice(0, 3).toLowerCase();
        // console.log("HANDLECLICK")
        // axios.get('http://api.nobelprize.org/2.0/nobelPrizes?sort=desc&nobelPrizeCategory=' + buttonValue + '&format=json&csvLang=en')
        //     .then(res => {
        //         const categoryData = res.data.nobelPrizes;         
        // console.log("categoryData", res.data.nobelPrizes)
        // console.log("CATEGORY", categoryData?.category?.en)
        // this.setState({
        //     category: buttonValue
        // })
        //Change the route to /cards/<buttonValue>
        this.props.history.push("/cards/" + buttonValue);
        // }).
        // catch(err => console.log(err))
    };
    render() {
        const allCategoriesButtons = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];
        const allCatMap = allCategoriesButtons.map(button =>
            < ButtonCategory
                key={button.toString()}
                value={button}
                name={button}
                onClick={e => this.handleClick(e.target.value)}
            />
        )

        return (
            <div>
                <div className="container__section">
                    {allCatMap}
                </div >
            </div>
        )
    }
}

export default HomeButtons;
