import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateData} from '../actions/actions.js';
import Papa from 'papaparse';
import $ from "jquery";

const PATH = './data.txt';

class Welcome extends Component {
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
        return (
            <div className = 'welcome'>
                <h1>welcome</h1>
            </div>
        ); 
    }
   
}
function mapStateToProps(state) {
    return({data: state.data});
}
const mapDispatchToProps = {
    updateData
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);