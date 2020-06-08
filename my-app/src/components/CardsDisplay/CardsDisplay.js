// import React, { Component } from 'react';
// import axios from 'axios';
// import WinnerCard from '../WinnerCard/WinnerCard.js';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// // import YearCard from '../YearCard/YearCard.js';
// import Buttons from '../Buttons/Buttons'


// class CardsDisplay extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             categoriesNobel: []
//         };
//     };

//     // changeCategory = (e) => {
//     //     const nobelCategoryIndex = this.state.category.findIndex(p => {
//     //         return p.id === id;
//     //     })
//     // }
//     // const category = {
//     //     ...this.state.nobelArray[nobelCategoriesIndex]
//     // }

//     // componentDidMount() {
//     //     axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}')
//     //         .then(response => {
//     //             const limit = response.data.slice(20, 25);
//     //             console.log("response.data", response.data);
//     //             const categoryData = response.data;

//     //             this.setState({ categoriesNobel: categoryData });
//     //             console.log(this.setState)

//     //             // console.log("test name", response.data[0].laureates[0].knownName.en)
//     //             //SAME AS: console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
//     //             // console.log("test category", response.data[0].category.en)

//     //         }).
//     //         catch(err => console.log(err))
//     // };
//     render() {
//         // console.log("this.state", this.state);
//         //create array of laureates
//         const laureates = this.state.categoriesNobel.map((e) => {
//             return <WinnerCard
//                 key={e.laureates[0].id}
//                 value={e}
//                 award={e.awardYear}  // YEAR
//                 category={e.category.en} // -- PRIZE CATEGORY -- //
//                 name={e.laureates[0].knownName?.en} // NAME OF WINNER
//                 motivation={e.laureates[0].motivation?.en}
//                 value={e.category}
//             // award={e.award}  // YEAR
//             />
//         });

//         return (
//             <div >
//                 <div className="spacer"></div>
//                 <Container>
//                     {/* <Buttons/> */}
//                     <Row>
//                         {/* <Col sm={4}> </Col> */}
//                         <Col sm={12}> {laureates}</Col>
//                     </Row>
//                 </Container>
//             </div >
//         )
//     };
// }

// export default CardsDisplay;
