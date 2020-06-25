import React, { Component } from 'react'
import classes from './HomeButtons2.module.css';
import ButtonCategory from '../../components/ButtonCategory/ButtonCategory';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 100%;
height: 20%;
text-align: center;
justify-content: center;
`

class HomeButtons extends Component {

    handleClick = (buttonValue) => {
        console.log("PROPS HomeButtons", this.props)
        buttonValue = buttonValue.slice(0, 3).toLowerCase();
        this.props.history.push("/" + buttonValue);
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
                <StyledDiv>
                    {allCatMap}
                </StyledDiv>
            </div>
        )
    }
}

export default HomeButtons;
