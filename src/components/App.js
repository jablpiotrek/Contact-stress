import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
    
import '../style/css/App.css';
import reducers from '../reducers/reducers.js';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

let store = createStore(reducers);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hue: 'hue-rotate(0deg)',
            val: 0
        }; 
        this.animateBckg= this.animateBckg.bind(this);
    }
    
    animateBckg(i) {
            let angle = this.state.val + i;

            this.setState({
                hue: 'hue-rotate(' + angle + 'deg)',
                val: angle
            });
    }
    
    render() {
        return (
            <Provider store = {store}>
                   <Router>
                        <div className = 'app'>
                            <Header handleClick = {() => {this.animateBckg(90)}}/>
                            <Main />
                            <Footer />
                            <div  
                                className = 'background' 
                                style = {{
                                    filter: this.state.hue
                                }}
                            >
                           </div>
                        </div>
                        
                    </Router>
                    
            </Provider>
        );
    }
}

