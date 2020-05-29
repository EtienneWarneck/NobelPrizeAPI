import React, { Component } from 'react';
import axios from 'axios';
import AuthorCard from '../AuthorCard/AuthorCard.js';

class Selected extends Component {
    state = {
        laureates: [ ]
    }

    componentDidMount() {
        axios.get('http://api.nobelprize.org/2.0/laureates')
            .then(response => {
                console.log(response.data.laureates)
                console.log(response.data)
                this.setState({ laureates: response.data });
            });
    };
    render() {
//create array of laureates
        const laureates = this.state.laureates.map(laureate => { 
            return <AuthorCard title={laureate.laureates} />;
        })

        return (
                <div>HERE
                    <section>
                {laureates} 
                </section>
                {/* <AuthorCard/> */}
                </div>
        )
    };
}

export default Selected;
