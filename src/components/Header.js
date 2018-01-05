import React, {Component} from 'react';
import UNSWLogo from '../images/UNSW.png';
import '../style/css/Header.css';
import { NavLink} from 'react-router-dom';

export default class  Header extends Component {
    
    render () {
        return (
            <div className = 'header'>

                <div className = 'title'>
                    <a rel="noopener noreferrer" target = '_blank' href="https://www.unsw.edu.au/"><img src={UNSWLogo} alt="Univeristy of New South Wales Sydney"/></a>
                    <h1>Coating Stress Calculator</h1>
                </div>
                <nav>
                    <NavLink onClick = {this.props.handleClick} exact to = '/' activeClassName="active">Home</NavLink>
                    <NavLink onClick = {this.props.handleClick} to = '/calculate' activeClassName="active">Calculate</NavLink>
                    <NavLink onClick = {this.props.handleClick} to = '/plot' activeClassName="active">Plot</NavLink>
                    <NavLink onClick = {this.props.handleClick} to = '/data' activeClassName="active">Data</NavLink>
                    <NavLink onClick = {this.props.handleClick} to = '/about' activeClassName="active">About</NavLink>
                </nav>
                
            </div>
        );
    }
}


