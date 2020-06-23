// import React, { Component } from 'react'
// import axios from 'axios';
// import ButtonCategory from '../ButtonCategory/ButtonCategory';
// import WinnerCard from '../WinnerCard/WinnerCard'
// import './ButtonsCategories.css'

// export class ButtonsCategories extends Component {
//     state = {
//         allCards: [],
//         category: ''

//     }

//     // passButtonValue = (buttonValue) => {
//     //     buttonValue = buttonValue.slice(0, 3).toLowerCase();
//     //     this.setState({
//     //         category: buttonValue
//     //     })
//     // }

//     handleClick = (buttonValue) => {
//         // only 3 first letters of the button to match category in the API:
//         buttonValue = buttonValue.slice(0, 3).toLowerCase();
//         console.log("HANDLECLICK")
//         axios.get('http://api.nobelprize.org/2.0/nobelPrizes?sort=desc&nobelPrizeCategory=' + buttonValue + '&format=json&csvLang=en')
//             .then(res => {
//                 const categoryData = res.data.nobelPrizes;
//                 console.log("categoryData", res.data.nobelPrizes)
//                 // console.log("CATEGORY", categoryData?.category?.en)
//                 this.setState({
//                     allCards: categoryData,
//                     category: buttonValue
//                 })
//             }).
//             catch(err => console.log(err))
//     };

//     render() {

//         //BUTTONS CATEGORIES
//         const allCategoriesButtons = ["Physics", "Chemistry", "Medicine", "Literature", "Peace", "Economics"];
//         const allCatMap = allCategoriesButtons.map(button =>
//             < ButtonCategory
//                 key={button.toString()}
//                 value={button}
//                 name={button}
//                 onClick={e => this.handleClick(e.target.value)}
//             />
//         )

//         //CARDS 
//         const cards = this.state.allCards.map((card) => {
//             return <WinnerCard
//                 key={card.toString()}
//                 awardYear={card.awardYear}
//                 category={card.category.en}
//                 name={card.laureates[0].knownName?.en}
//                 motivation={card.laureates[0].motivation?.en}
//             />
//         })

//         return (
//             // <div className="container">
//             //     <div className="btn-group w-100">
//             <div className="container__main">
//                 <div className="container__section">
//                     {/* {allCatMap} */}
//                 </div >
//                 <div>
//                     {cards}
//                 </div>
//             </div>
//         )
//     }
// }

// export default ButtonsCategories;