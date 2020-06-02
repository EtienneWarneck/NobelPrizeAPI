import React, { Component } from 'react';
import axios from 'axios';
import WinnerCard from '../WinnerCard/WinnerCard.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import YearCard from '../YearCard/YearCard.js';


class Selected extends Component {
    state = {
        nobelArray: [],
        category: ""
    };

    // changeCategory = (e) => {
    //     const nobelCategoryIndex = this.state.nobelArray.findIndex(p => {
    //         return p.id === id;
    //     })
    // }
    // const category = {
    //     ...this.state.nobelArray[nobelCategoriesIndex]
    // }

    async componentDidMount() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}')
            .then(response => {
                console.log("response.data", response.data);
                const nobelArray = response.data;
                this.setState({ nobelArray });
                console.log("test name", response.data[0].laureates[0].knownName.en)
                //SAME AS: console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
                console.log("test category", response.data[0].category.en)

            }).
            catch(err => console.log(err))
    };
    render() {
        // if( !this.state.isReady ){
        //     return <div>Loading...</div>
        //   }
        // console.log("this.state", this.state);
        //create array of laureates
        const laureates = this.state.nobelArray.map((e) => {
            return <WinnerCard
                // key={e.id}
                value={e}
                award={e.awardYear}  // YEAR
                category={e.category.en} // -- PRIZE CATEGORY -- //
                name={e.laureates[0].knownName?.en} // NAME OF WINNER
                motivation={e.laureates[0].motivation?.en}

                value={e.category}
                // award={e.award}  // YEAR
            />
        });



        console.log("laureates", laureates);



        return (
            <div >
                <div className="spacer"></div>
                <Container>
                    <Row>
                        {/* <Col sm={4}> </Col> */}
                        <Col sm={6}> {laureates}</Col>
                    </Row>
                </Container>
            </div >


        )
    };
}

export default Selected;
