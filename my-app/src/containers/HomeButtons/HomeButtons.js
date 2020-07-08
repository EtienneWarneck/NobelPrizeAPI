import React, { Component } from 'react'
// import axios from 'axios';
import classes from './HomeButtons.module.css';
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
        this.props.history.push("/" + buttonValue);
        // }).
        // catch(err => console.log(err))
    };
    render() {
        // const styleButton = {flex: '1 400px'};
        const allCategoriesButtons = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];
        const allCatMap = allCategoriesButtons.map(button =>
            < ButtonCategory
                // style={styleButton}
                key={button.toString()}
                value={button}
                name={button}
                onClick={e => this.handleClick(e.target.value)}
            />
        )

        // const style = {
        //     border: '10px solid red',
        //     borderTop: '1px solid lightgrey',
        //     display: 'flex',
        //     flexFlow: 'row wrap',
        //     padding: '10px',
        //     margin: 'auto',
        //     marginTop: '4em',
        //     alignItems: 'center',
        //     justifyContent: 'space-around'
        // }
        return (

            <div className={classes.container__section}>
            {/* <div style={style}> */}
                {allCatMap}
            {/* </div > */}
            </div >
        )
    }
}

export default HomeButtons;
