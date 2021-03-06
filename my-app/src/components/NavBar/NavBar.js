import React from 'react';
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import './Navbar.css';
import Nav from 'react-bootstrap/Nav'
import Radium from 'radium';

const toolbar = props => {

    // styling div with Radium
    const style = {
        // border: '1px solid red',
        color: '#BB8A35',
        height: '8em',
        position: 'relative',
        borderBottom: '1px solid lightgrey',
        outline: 'none !important',
        boxShadow: 'none !important',
    }

    const styleText = {
        // border: '1px solid red',
        color: '#DDC59D',
        fontSize: '3em',
        textAlign: 'center',
        margin: '0',
        position: 'absolute',
        top: '20%',
        width: '100%',
        outline: 'none !important',
        boxShadow: 'none !important',
    }

    const styleHomeButton = {
        // border: '1px solid red',
        display: 'inline-block',
        position: 'absolute',
        color: 'black',
        fontSize: '1.2em',
        marginLeft: '40%',
        marginRight: '10px',
        top: '70%',
        width: '100px',
        outline: 'none !important',
        boxShadow: 'none !important',
    }
    const styleHomeButton2 = {
        // border: '1px solid red',
        display: 'inline-block',
        position: 'absolute',

        color: 'black',
        fontSize: '1.2em',
        marginLeft: '50%',
        top: '70%',
        width: '100px',
        outline: 'none !important',
        boxShadow: 'none !important',
    }


    return (
        // <Navbar bg="" expand="lg" className="navbar d-flex justify-content-center" >
        <div style={style}>
            {/* <Container className="col-6"> */}
            {/* <Row className="col-12 "> */}
            {/* <Navbar.Brand className="navbar-brand  py-5 col-12 text-center ">BOOKS from Nobel Prize Winners</Navbar.Brand>
             */}
            <Nav.Link style={styleText} href='/'>Nobel Prize Laureates</Nav.Link>
            {/* <Navbar.Text className="navbar-text bg-info text-center">TEST TEST TEST</Navbar.Text> */}
            <div >
                <Nav.Link style={styleHomeButton} href="/">Home</Nav.Link>
                <Nav.Link style={styleHomeButton2} href="https://github.com/EtienneWarneck/NobelPrizeAPI/tree/master/my-app">GitHub</Nav.Link>
            </div>

            {/* <Nav.Link href="#link">Economics</Nav.Link> */}
            {/*   <Nav.Link href="#link">Literature</Nav.Link>
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

