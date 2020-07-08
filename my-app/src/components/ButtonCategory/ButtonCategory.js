import React from 'react'
// import Button from 'react-bootstrap/Button'
// import axios from 'axios'
import classes from  './ButtonCategory.module.css';

function buttonCategory(props) {
    // console.log(props.value) // category

    return (
        <button  
         className={classes.b}
        // style={{style: this.props.style}}
            // className=" btn btn-light d-inline m-2 border-dark rounded-0"
            name={props.name}
            onClick={props.onClick}
            value={props.value}
        >
            {props.name}
        </button>
    )
}

export default buttonCategory;
