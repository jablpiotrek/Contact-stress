import React, {Component} from 'react';
import UNSWLogo from '../images/UNSW.png';
import '../style/css/Header.css';
import {
  Link
} from 'react-router-dom';
export default class  Header extends Component {
    
    render () {
        return (
            <div className = 'header'>
                <div className = 'title'>
                    <img src={UNSWLogo} alt="Univeristy of New South Wales Sydney"/>
                    <h1>Coating Stress Calculator</h1>
                </div>
                <nav>
                    <ul className = 'navigation'>
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
}


