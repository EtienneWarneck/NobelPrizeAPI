import React from 'react';
// import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Navbar.css';
import Nav from 'react-bootstrap/Nav'
import Radium from 'radium';

const toolbar = props => {

    const style = {
        // border: '1px solid red',
        color: '#BB8A35',
        height: '8em',
        position: 'relative',
        borderBottom: '1px solid lightgrey',
    }

    const styleText = {
        // border: '1px solid red',
        fontSize: '3em',
        textAlign: 'center',
        margin: '0',
        position: 'absolute',
        top: '20%',
        width: '100%'
    }

    return (
        // <Navbar bg="" expand="lg" className="navbar d-flex justify-content-center" >
        <div style={style}>
            {/* <Container className="col-6"> */}
            {/* <Row className="col-12 "> */}
            {/* <Navbar.Brand className="navbar-brand  py-5 col-12 text-center ">BOOKS from Nobel Prize Winners</Navbar.Brand>
             */}
            <div style={styleText}>BOOKS from Nobel Prize Winners</div>
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
            {/* </Navbar> */}
        </div>
    )
}

export default Radium(toolbar);

