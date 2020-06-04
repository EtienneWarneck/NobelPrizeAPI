import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Navbar.css';
import Nav from 'react-bootstrap/Nav'


const toolbar = props => {
    return (
        <Navbar bg="" expand="lg" className="navbar bg-light d-flex" position="relative" >
            
            {/* <Container className="col-12"> */}
        {/* <Row className="col-12 justfy-content-center"> */}
            {/* <Navbar.Brand className="navbar-brand bg-success py-5 col-12" >NOBEL PRIZE WINNER BOOKS</Navbar.Brand> */}
            <Navbar.Text className="navbar-text ">The BOOKS by Nobel Prize Winners</Navbar.Text>
            {/* <Nav.Link href="#link">Chemistry</Nav.Link>
            <Nav.Link href="#link">Economics</Nav.Link>
            <Nav.Link href="#link">Literature</Nav.Link>
            <Nav.Link href="#link">Medicine</Nav.Link>
            <Nav.Link href="#link">Peace</Nav.Link>
            <Nav.Link href="#link">Physics</Nav.Link> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
            {/* </Row> */}
            {/* </Container> */}
        </Navbar>

    )
}

export default toolbar;

