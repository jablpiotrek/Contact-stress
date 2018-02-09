import React from 'react';
import {
  Link
} from 'react-router-dom';


const Footer = function (props) {
    
    const d = new Date();
    const copyrightNotice = 'Copyright \u00A9 ' + d.getFullYear() + '. All rights reserved.' ;
    
    
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
            <div className = 'version'>
               <p>{copyrightNotice}</p>
               <p>ver. 1.0.5</p>
            </div>
            
        </div>
    );
}

export default Footer;