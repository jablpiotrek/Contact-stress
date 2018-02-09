import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class Table extends Component {

    render(){
        return(
            <ReactTable 
                columns ={this.props.headers}
                data = {this.props.data}
                defaultPageSize = {this.props.defaultPageSize}
            />
        );
    }
    
}