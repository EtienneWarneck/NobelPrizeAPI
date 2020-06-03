// import React, { Component } from 'react';
// import './ButtonList.css';
// import axios from 'axios';
// import Selected from '../pages/selected';
// import Button from 'react-bootstrap/Button';
// import WinnerCard from '../WinnerCard/WinnerCard'


// // console.log(props);

// class ButtonListClass extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             category: "",
//             filteredCategoryAPI: null

//         }
//         console.log(category, filteredCategoryState);
//     }

//     componentDidMount() {
//         axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}' + props.category)
//             .then(response => {
//                 console.log("response.data", response.data);
//                 this.setState({ filteredCategoryAPI: response.data })
//                 this.setState({ category:  })
//                 // console.log("test name", response.data[0].laureates[0].knownName.en)
//                 //SAME AS: console.log("Array of array", response.data[0]['laureates'][0]['knownName']['en']);
//                 // console.log("test category Chemistry=", response.data[0].category.en)
//             }).
//             catch(err => console.log(err))
//     };

//     render() {
//             const category = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];

//     const categoryButtons = categories.map((button) =>
//         <button key={button.toString()} value={props.category} category={props.setCategoryState} onClick={handleClick} >{button}</button>
//     )

//         if (this.state.filteredCategoryAPI) {
//             return      <div className = "categories" >
//                         <Button className="btn btn-light m-5 border-dark" category={category} onClick={handleClick} onChange={event}>Physics</Button>
//                      { categoryButtons }
//                  </div>
//         } else {
//             return null;
//         }
//     }
// }
// export default ButtonList;

// //     const handleClick = () => (
// //         fetchAPI()
// //     )

// //     const category = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];

// //     const categoriesButtons = categories.map((button) =>
// //         <button key={button.toString()} value={props.category} category={props.setCategoryState} onClick={handleClick} >{button}</button>
// //     )

// //     // console.log("category", category);

// //     return(
// //     // <div className="container__main">
// //     //     <section className="container__section">
// //     //         {categoriesButtons}
// //     //onClick={() => showCategory()}


// // );
