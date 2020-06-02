import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Navbar.css';


const toolbar = props => {
    return (
        <Navbar bg="" expand="lg" className="navbar bg-light " position="relative">
            {/* <Container className="col-12"> */}
        {/* <Row className="col-12 justfy-content-center"> */}
            {/* <Navbar.Brand className="navbar-brand bg-success py-5 col-12" >NOBEL PRIZE WINNER BOOKS</Navbar.Brand> */}
            <Navbar.Text class="navbar-text">NOBEL PRIZE WINNER BOOKS</Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
            {/* </Row> */}
            {/* </Container> */}
        </Navbar>

    )
}

export default toolbar;

