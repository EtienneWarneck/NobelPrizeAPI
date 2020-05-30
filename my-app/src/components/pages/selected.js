import React, { Component } from 'react';
import axios from 'axios';
import AuthorCard from '../AuthorCard/AuthorCard.js';

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

//    changeCategory = (e) => {
//         const nobelCategory = this.state.nobelCategories
//         console.log('The link was clicked.');

//     }


    async componentDidMount() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}')
            .then(response => {
                console.log("response.data", response.data);
                // console.log("HERE 2", response.data.laureates[2].fullName.en);
                this.setState({
                     nobelCategories: response.data });
                // console.log("test", response.data[0].laureates[0].knownName)
                console.log("test", response.data[0].category.en)
            });
    };
    render() {
        console.log("this.state", this.state);
        //create array of laureates
        const laureates = this.state.nobelCategories.map((e,id) => {
            return <AuthorCard
                key={e.id}
                value={e}
                award={e.awardYear}  //working
                category={e.categoryFullName.en} //working
                // name={e.laureates[id]}
            />;
        });

        return (
            <div>
                <section>
                    {laureates}
                </section>
            </div>
        )
    };
}

export default Selected;
