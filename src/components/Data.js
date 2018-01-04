import React, {Component} from 'react';
import {connect} from 'react-redux';
import Papa from 'papaparse';
import {updateData} from '../actions/actions.js';

import Table from './Table.js';

import '../style/css/Data.css';
const noPlots = 'No plots to display. ';
class Data extends Component {
    
    constructor(props) {
        super(props);
        this.handeFileAdded = this.handeFileAdded.bind(this);
        this.prepareTable = this.prepareTable.bind(this);

    }

  
    
    handeFileAdded(evt){
        Papa.parse(evt.target.files[0], {
            complete: (results) => {
                this.props.updateData(results);
            }
        });
    }
    prepareTable(){
        let headers = this.props.data.data[0].map((header, index) => {
            return {
                Header: header,
                accessor: 'row'+index,
                width: (header.length + 12) * 7
            }
        });
        let data = this.props.data.data.slice(1, this.props.data.data.length).map((record) => {
            let row = {};
            headers.map((header, index) => {
                Object.assign(row, { 
                    [header.accessor]: record[index]
                });
                return null;
            });
            return row;
            
        });
        return({
                headers: headers,
                data: data
            });
    }
    render() {

        const table_0 = (this.props.data ) ? this.prepareTable() : null;
        return (
            <div className = 'container data'>
                <h2>Data</h2>
                <div className = 'upload section'>
                    <h3>File upload</h3>
                    <p>To change working data, upload .csv or .txt file. Data format in given file must be same as in an untouched Ansys parameter set export.</p>
                    
                    <input type = 'file' onChange = {this.handeFileAdded} />
                </div>
                <div  className = 'section-table'>
                    <h3>Current data state</h3>
                    {(table_0) ? 
                        <Table 
                            data = {table_0.data}
                            headers = {table_0.headers}
                        /> : <p>{noPlots}</p>}
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Data);
