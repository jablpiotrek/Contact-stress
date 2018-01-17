import React, {Component} from 'react';
import UNSWLogo from '../images/UNSW.png';
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
                    <NavLink exact to = '/' activeClassName="active">
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to = '/calculate' activeClassName="active">
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                        <span>Calculate</span>
                    </NavLink>
                    <NavLink to = '/plot' activeClassName="active">
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                        <span>Plot</span>
                    </NavLink>
                    <NavLink to = '/data' activeClassName="active">
                        <i className="fa fa-database" aria-hidden="true"></i>
                        <span>Data</span>
                    </NavLink>
                    <NavLink to = '/about' activeClassName="active">
                        <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                        <span>About</span>
                    </NavLink>
                </nav>
                
            </div>
        );
    }
}


