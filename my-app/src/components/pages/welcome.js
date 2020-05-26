import React from 'react';
import Buttons from '../Buttons/Buttons'
import ButtonList from '../Buttons/ButtonList'
import Button from 'react-bootstrap/Button';
import './welcome.css';


function welcome() {
    return (
        <div>
      <main>
        <section>SECTION 1</section>
        <section>SECTION 2</section>
        <Buttons variant="primary"></Buttons>

      </main>
        </div>
    )
}

export default welcome;
