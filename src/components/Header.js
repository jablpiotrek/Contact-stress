import React, {Component} from 'react';
import UNSWLogo from '../images/UNSW.png';
import '../style/css/Header.css';
import { NavLink} from 'react-router-dom';

export default class  Header extends Component {
    
    render () {
        return (
            <div className = 'header'>
                <div className = 'title'>
                    <img src={UNSWLogo} alt="Univeristy of New South Wales Sydney"/>
                    <h1>Coating Stress Calculator</h1>
                </div>
                <nav>
                    <NavLink exact to = '/' activeClassName="active">Home</NavLink>
                    <NavLink to = '/calculate' activeClassName="active">Calculate</NavLink>
                    <NavLink to = '/plot' activeClassName="active">Plot</NavLink>
                    <NavLink to = '/data' activeClassName="active">Data</NavLink>
                    <NavLink to = '/about' activeClassName="active">About</NavLink>
                </nav>
            </div>
        );
    }
}


