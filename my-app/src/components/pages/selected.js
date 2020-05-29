import React, { Component } from 'react';
import axios from 'axios';
import AuthorCard from '../AuthorCard/AuthorCard.js';

class Selected extends Component {
    state = {
        laureates: []
    };

    componentDidMount() {
        axios.get('http://api.nobelprize.org/2.0/nobelPrize/{category}/{year}')
            .then(response => {
                console.log("response.data", response.data);
                // console.log("HERE 2", response.data.laureates[2].fullName.en);
                this.setState({ laureates: response.data });
            });
    };
    render() {
        console.log("this.state", this.state);
        //create array of laureates
        const laureates = this.state.laureates.map((e, id) => {
            return <AuthorCard
                key={e.id}
                e={e.awardYear}
                category={e.categoryFullName.en}
                name={e.laureates.motivation}
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
