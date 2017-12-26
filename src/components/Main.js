import React, {Component} from 'react';
import {connect} from 'react-redux';
import Papa from 'papaparse';
import $ from "jquery";
import {updateData} from '../actions/actions.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Welcome from './Welcome.js';
import Calculate from './Calculate.js';
import Plot from './Plot.js';
import Data from './Data.js';
import About from './About.js';

import '../style/css/Main.css';

const PATH = './data.txt';

class Main extends Component {
    constructor(props){
        super(props);
        this.loadDefaultFile = this.loadDefaultFile.bind(this);
    }
    loadDefaultFile(path) {
        if (!this.props.data) {
            $.ajax({
                url: path,
                dataType: "text",
                success: (data) => {
                    Papa.parse(data, {
                        complete: (results) => {
                            this.props.updateData(results);
                        }
                    });
                }
            });
        }
    }

    componentDidMount(){
        this.loadDefaultFile(PATH);
    }
    render(){

        return(
            <Router>
                <div className = 'main'>
                    <nav>
                        <ul>
                            <li><Link to = '/'>Home</Link></li>
                            <li><Link to = '/calculate'>Calculate</Link></li>
                            <li><Link to = '/plot'>Plot</Link></li>
                            <li><Link to = '/data'>Data</Link></li>
                            <li><Link to = '/about'>About</Link></li>
                        </ul>
                    </nav>
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
                </div>
            </Router>


        );
    }
}

function mapStateToProps(state) {
    return({data: state.data});
}
const mapDispatchToProps = {
    updateData
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
