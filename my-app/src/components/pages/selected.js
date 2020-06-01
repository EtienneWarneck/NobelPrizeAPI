import React, { Component } from 'react';
import axios from 'axios';
import AuthorCard from '../AuthorCard/AuthorCard.js';
import Toolbar from '../Toolbar/Toolbar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Selected extends Component {
    state = {
        nobelCategories: [
            // {category: "Physics"},
            // {category: "Chemistry"},
            // {category: "Medicine"},
            // {category: "Literature"},
            // {category: "Peace"},
            // {category: "Economics"},
        ]
    };

    // changeCategory = (e) => {
    //     const nobelCategoryIndex = this.state.nobelCategories.findIndex(p => {
    //         return p.id === id;
    //     })
    // }
    // const category = {
    //     ...this.state.nobelCategories[nobelCategoriesIndex]
    // }


    async componentDidMount() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}')
            .then(response => {
                console.log("response.data", response.data);
                // console.log(response.data.laureates[2].fullName.en);
                this.setState({
                    nobelCategories: response.data
                });
                // console.log("test", response.data[0].laureates[0].knownName.en)
                console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
            }).
            catch(err => console.log(err))
    };
    render() {
        // if( !this.state.isReady ){
        //     return <div>Loading...</div>
        //   }
        // console.log("this.state", this.state);
        //create array of laureates
        const laureates = this.state.nobelCategories.map((e) => {
            return <AuthorCard
                key={e.id}
                value={e}
                award={e.awardYear}  // YEAR
                // award={e.award}  // YEAR
                category={e.category.en} // PRIZE CATEGORY 
                name={e.laureates[0].knownName?.en} // NAME OF WINNER
            />;
        });

        console.log("laureates", laureates);

        return (
            <div >
                <div className="spacer"></div>
                <Container>
                    <Row>
                        <Col sm={4}>YEAR:</Col>
                        <Col sm={8}> {laureates}</Col>
                    </Row>
                </Container>
            </div>


        )
    };
}

export default Selected;
