import React, {Component} from 'react';
import {connect} from 'react-redux';
import Papa from 'papaparse';
import {updateData} from '../actions/actions.js';

class Data extends Component {
    
    constructor(props) {
        super(props);
        this.handeFileAdded = this.handeFileAdded.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
        
    }
    
  
    
    handeFileAdded(evt){
        Papa.parse(evt.target.files[0], {
            complete: (results) => {
                this.props.updateData(results);
            }
        });
    }
    
    renderTableData(parsed){
        let i = 0;
        let table = parsed.data.map(records => {
            let j = -1;
            let row = records.map(record => {
                j++;
                return (i === 0) ? <th key = {j}>{record}</th> : <td key = {j}>{(j === 0 )? record : Number(record).toFixed(2)}</td>
            });
            i++;
            return(<tr key = {i}>{row}</tr>);
        });
        return table;
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
                    <table>
                        <tbody>{(this.props.data) ? this.renderTableData(this.props.data)  : null}</tbody>
                    </table>
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
