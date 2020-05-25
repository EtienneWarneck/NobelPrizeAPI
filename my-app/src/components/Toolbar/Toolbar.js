import React from 'react';
import './Toolbar.css';

const toolbar = props => {
    return (
        <header>
            <nav>
                <div><a href="">LOGO</a></div>
                <div><ul>
                    <li><a href="">Login</a></li>
                    <li><a href="">Categories</a></li>
                </ul>
                </div>
            </nav>
        </header>

    )
}

export default toolbar;

