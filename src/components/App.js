import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'



import '../style/css/App.css';

import Header from './Header.js';
import Footer from './Footer.js';

import Main from './Main.js';

import reducers from '../reducers/reducers.js';


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

