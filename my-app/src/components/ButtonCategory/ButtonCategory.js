import React from 'react'
import Button from 'react-bootstrap/Button'
// import axios from 'axios'
import './ButtonCategory.css'

function buttonCategory(props) {
    // console.log(props.value) // category

    return (
        <Button
            className=" btn btn-light d-inline m-2 border-dark rounded-0"
            name={props.name}
            onClick={props.onClick}
            value={props.value}
        >
            {props.name}
        </Button>
    )
}

export default buttonCategory;
