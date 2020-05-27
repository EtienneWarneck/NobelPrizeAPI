import React from 'react';
// import Buttons from '../Buttons/Buttons'
import Button from 'react-bootstrap/Button';
import ButtonList from '../Buttons/ButtonList';


function welcome() {
    return (
        <div>
            <div className="spacer"></div>
            <main>
                {/* <section className=""> SECTION with a 
                    <Button className="btn btn-primary btn-block">bootstrap-React BUTTON</Button>
                </section> */}
                {/* <section>SECTION 2 */}
                    <ButtonList></ButtonList>
                {/* </section> */}


            </main>
        </div>
    )
}

export default welcome;
