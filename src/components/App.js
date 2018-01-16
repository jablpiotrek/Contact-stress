import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

    
//importing all the style files at one point, as create-react-app dont use locally-scoped css so no difference where to import it
    
import '../style/css/App.css';
import '../style/css/About.css';
import '../style/css/Calculate.css';
import '../style/css/Data.css';
import '../style/css/Footer.css';
import '../style/css/Header.css';
import '../style/css/Main.css';
import '../style/css/Plot.css';
import '../style/css/Plot3D.css';
import '../style/css/Welcome.css';    

    
import reducers from '../reducers/reducers.js';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

let store = createStore(reducers);

export default class App extends Component {

    
    
    render() {
        return (
            <Provider store = {store}>
                   <Router>
                        <div className = 'app'>
                            <Header />
                            <Main />
                            <Footer />
                            <div  
                                className = 'background' 
                            >
                           </div>
                        </div>
                        
                    </Router>
                    
            </Provider>
        );
    }
}

