import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Navbar.css';
import Nav from 'react-bootstrap/Nav'


const toolbar = props => {
    return (
        <Navbar bg="" expand="lg" className="navbar d-flex justify-content-center" >
            {/* <Container className="col-6"> */}
       {/* <Row className="col-12 "> */}
            <Navbar.Brand className="navbar-brand  py-5 col-12 text-center">BOOKS from Nobel Prize Winners</Navbar.Brand>
            {/* <Navbar.Text className="navbar-text bg-info text-center">TEST TEST TEST</Navbar.Text> */}
            {/* <Nav.Link href="#link">Chemistry</Nav.Link>
            <Nav.Link href="#link">Economics</Nav.Link>
            <Nav.Link href="#link">Literature</Nav.Link>
            <Nav.Link href="#link">Medicine</Nav.Link>
            <Nav.Link href="#link">Peace</Nav.Link>
            <Nav.Link href="#link">Physics</Nav.Link> */}
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse> */}
          {/* </Row>  */}
            {/* </Container>/\ */}
        </Navbar>

    )
}

export default toolbar;

