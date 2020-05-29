import React, { Component } from 'react';
import axios from 'axios';

class selected extends Component {

    state= {
            laureatesData : []
    }

    componentDidMount() {
        axios.get('http://api.nobelprize.org/2.0/laureates')
            .then(response => {
                this.setState(laureatesData: response.data);
                console.log(response)
            });
    };


    render() {
        const laureates = this.state.laureatesData.map(laureate => {
            return <div></div>
        }
        )
        return (
            <div>
              
            </div>
        )
    };
}

export default selected;
