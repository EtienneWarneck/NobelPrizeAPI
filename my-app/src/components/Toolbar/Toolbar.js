import React from 'react';
import './Toolbar.css';

const toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__logo"><a href="">NOBEL PRIZE WINNER BOOKS</a></div>
               
                {/* <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Categories</a></li>
                    </ul>
                </div> */}
            </nav>
        </header>
    )
}

export default toolbar;

