import React from 'react';
import {
  Link
} from 'react-router-dom';

import '../style/css/Footer.css';

const Footer = function (props) {
    return (
        <div className = 'footer'>
            <div>
                <h3>Menu</h3>
                <ul>
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = '/calculate'>Calculate</Link></li>
                    <li><Link to = '/plot'>Plot</Link></li>
                    <li><Link to = '/data'>Data</Link></li>
                    <li><Link to = '/about'>About</Link></li>
                </ul>
            </div>
            <div>
                <h3>More</h3>
                <ul>
                    <li><a rel="noopener noreferrer" target = '_blank' href="https://github.com/jablpiotrek/Contact-stress">Find project on GitHub</a></li>
                    <li><a rel="noopener noreferrer" target = '_blank' href="https://www.linkedin.com/in/piotr-jablonski-008b2799/">Find me on LinkedIn</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;