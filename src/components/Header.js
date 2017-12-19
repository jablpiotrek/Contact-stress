import React from 'react';
import {
    Link
} from 'react-router-dom';
const Header = function (props) {
    return (
        <div className = 'header'>
            <h1>Header</h1>
            <nav>
                <ul>
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = '/calculate'>Calculate</Link></li>
                    <li><Link to = '/plot'>Plot</Link></li>
                    <li><Link to = '/data'>Data</Link></li>
                    <li><Link to = '/about'>About</Link></li>
                </ul>
                
            </nav>
        </div>
    );
}

export default Header;