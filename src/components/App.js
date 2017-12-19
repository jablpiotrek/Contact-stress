import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import '../style/css/App.css';

import Header from './Header.js';
import Footer from './Footer.js';
import Welcome from './Welcome.js';
import Calculate from './Calculate.js';
import Plot from './Plot.js';
import Data from './Data.js';
import About from './About.js';

import reducers from '../reducers/reducers.js';


let store = createStore(reducers);

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <Router>
                    <div className = 'app'>
                        <Header />
                        <Switch>
                            <Route
                            path = '/calculate'
                            component =  {Calculate}
                            />
                               <Route
                            path = '/plot'
                            component =  {Plot}
                            />
                            <Route
                            path = '/data'
                            component =  {Data}
                            />
                                <Route
                            path = '/about'
                            component =  {About}
                            />
                            <Route
                            path= '/'
                            component =  {Welcome}
                            />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

