import React, {Component} from 'react';
import {connect} from 'react-redux';
import Papa from 'papaparse';
import {updateData} from '../actions/actions.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const noPlots = 'No plots to display. ';
class Data extends Component {
    
    constructor(props) {
        super(props);
        this.handeFileAdded = this.handeFileAdded.bind(this);
        this.renderTable = this.renderTable.bind(this);
    }
    
  
    
    handeFileAdded(evt){
        Papa.parse(evt.target.files[0], {
            complete: (results) => {
                this.props.updateData(results);
            }
        });
    }
    renderTable(){
        let headers = this.props.data.data[0].map((header, index) => {
            return {
                Header: header,
                accessor: 'row'+index
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
        return(
            <ReactTable 
                data ={data}
                columns = {headers}
                defaultPageSize={10}
            />
        );
    }
    
    render() {

        
        return (
            <div className = 'data'>
                <h2>Data</h2>
                <div>
                    <h3>File upload</h3>
                    <p>To change working data, upload .csv or .txt file. Data format in given file must be same as in an untouched Ansys parameter set export.</p>
                    <label>Upload .csv or .txt Ansys export file: </label>
                    <input type = 'file' onChange = {this.handeFileAdded} />
                </div>
                <div>
                    <h3>Current data state</h3>
                    {(this.props.data) ? this.renderTable() : <p>{noPlots}</p>}
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
