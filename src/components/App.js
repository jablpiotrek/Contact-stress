import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import '../style/css/App.css';
import reducers from '../reducers/reducers.js';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

let store = createStore(reducers);

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                    <div className = 'app'>
                        <Header />
                        <Main />
                        <Footer />
                    </div>
            </Provider>
        );
    }
}

