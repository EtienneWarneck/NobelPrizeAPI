import React from 'react'
import Button from 'react-bootstrap/Button'
import './Button.css'

function button(props) {
    console.log("id", props.id)
    return (
            <Button 
            className="btn btn-light d-inline m-2 border-dark" 
            id={props.id}
            // name={props.name}
            >{props.name}</Button>
            )
}

export default button;
