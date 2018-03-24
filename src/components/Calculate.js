import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Text, Select} from 'react-form';
import {appendResult, clearResults} from '../actions/actions.js';
import ndarray from 'ndarray';
import interp from 'ndarray-linear-interpolate';


import Table from './Table.js';




import {tempOptions} from './_selectOptions.js';
const noResults = 'No reslult to display. Set input values and hit "Calculate"!';

const formValidator = (values) => {
        return({
            r: (Number(values.r) >= 14 && Number(values.r) <= 22)? null : 'Radius must be between 14.0 and 22.0 (inclusive).',
            h: (Number(values.h) >= 0.1 && Number(values.h) <= 0.3)? null : 'Height must be between 0.1 and 0.3 (inclusive).'
        });
    }

export class Calculate extends Component {
    
    constructor(props) {
        super(props);
        this.sendResultsToStore = this.sendResultsToStore.bind(this);
        this.calculateResults = this.calculateResults.bind(this);
    }

    calculateResults(rawData, r, h, t){
        //Firstly, filter records that include selected temperature, and remove records with r1!== r2

        let data = rawData.data.filter(row => {
            return(Number(row[4]) === t && row[1] === row[2] && row[1] !== '1000');
        });

        //Now removing rows with Design Point name (first row) and rows with temperature and redundand row with first radius (as it is not needed)
        data = data.map(row => {
            return (row.slice(2,4).concat(row.slice(5, row.length)));
        });
        //Now convert all records to number
        data = data.map(row => {
            return(row.map( record => {
                return (Number(record));
            }

            ));
        });

        //sort array in order to build NDarray on it
        data.sort((a, b) => {
            //sort firstly by 1st column, if equal then sort by second column
            return  a[1] - b[1] || a[0] - b[0];
        });

        //create X,Y and Z arrays
        let dataX = [];
        let dataY = [];
        let dataZ = [];
        data.map(row => {
            if (dataX.indexOf(row[0]) === -1) {
                dataX.push(row[0])
            }
            if (dataY.indexOf(row[1]) === -1) {
                dataY.push(row[1])
            }
            return(row);
        });

        //create array of Z values arrays for different parameters
        for (let i = 2; i < data[0].length; i++) {
            dataZ.push(data.map(row => {
                return row[i];
                })
            );
        }

        //define array of ndArrays, each ndArray in array is anither parameter
        let dataZnda = dataZ.map(parameter => {
            return ndarray(new Float64Array(parameter), [dataX.length, dataY.length] );
        });
        //define x and y
        const rMin = dataX[0];
        const rMax = dataX[dataX.length -1]
        const hMin = dataY[0];
        const hMax = dataY[dataY.length -1];
        const x = (r - rMin) / (rMax - rMin) * (dataX.length -1);
        const y = (h - hMin) / (hMax - hMin) * (dataY.length -1);

        //interpolate ndArrays of parameters in x and y
        const result = dataZnda.map(parameter => {
            return interp(parameter, y, x);
        })
        


        return result;
    }
    sendResultsToStore(r,h,t, result) {
        this.props.appendResult({
            r:r,
            h:h,
            t:t,
            result: result
        });
    }
    rednerResults(rawData, results) {
        const parameters = ['R [mm]', 'H [mm]', 'T [\xB0C]'].concat(rawData.data[0].slice(5,rawData.length));
        let headers = parameters.map((header, index) => {
            return (
                {
                    Header: header,
                    accessor: 'row'+index,
                    width: (header.length + 12) * 7
                }
            );
        });
        let data = results.map(result => {
            let row ={};
            Object.assign(row, {
                row0: result.r,
                row1: result.h,
                row2: String(result.t)
            })
            
            result.result.map((parameter, index) => {
                Object.assign(row, {
                    [headers[index+3].accessor]: String(parameter)
                })
                return null;
            });
            
            return row;
        });    
        
        return({headers: headers, data: data});

        
    }
    render() {
        const table_0 = (this.props.data && this.props.results.length > 0)? this.rednerResults(this.props.data, this.props.results) : null;
        return (
            <div className = 'container calculate'>
                <h2><i  className="fa fa-bolt" aria-hidden="true"></i>Calculate</h2>
                    <Form
                        onSubmit = {values => {
                            this.sendResultsToStore(values.r, values.h, values.t, this.calculateResults(this.props.data, values.r, values.h, values.t));
                        }}
                        validateError = {formValidator}
                        defaultValues = {{t:22}}
                    >
                        {formApi => (
                            <form onSubmit = {formApi.submitForm} >
                                <div className = 'section geometry'>
                                    <h3><i  className="fa fa-sliders" aria-hidden="true"></i>Coating geometry</h3>
                                    <div>
                                        <label htmlFor = 'r'>Curvature radius (14-22 mm): </label>
                                        <Text className = {(formApi.submits>0 && formApi.errors.r) ? 'error' : null} field = 'r'/>
                                        
                                    </div>
                                    <div>
                                        <label htmlFor = 'h'>Coating tickness (0.1-0.3 mm): </label>
                                        <Text className = {(formApi.submits>0 && formApi.errors.h) ? 'error' : null} field = 'h'/>
                                      
                                    </div>
                                    <div>
                                        <label>{formApi.submits>0 ? formApi.errors.h : null}</label>
                                        <label>{formApi.submits>0 ? formApi.errors.r : null}</label>
                                    </div>
                                </div>
                                <div className = 'section temperature'>
                                    <h3><i  className="fa fa-thermometer-half" aria-hidden="true"></i>Temperature</h3>
                                    <div>
                                        <label htmlFor = 't'>Gradient temp. peak: </label>
                                        <Select field = 't' options={tempOptions} className = 'little'/>
                                    </div>
                                    
                                </div>
                                <div className = 'section buttons'>
                                    <button className = 'action' type="submit"><i  className="fa fa-arrow-right" aria-hidden="true"></i>Calculate</button>
                                    <button className = 'danger' type = 'button' onClick = {this.props.clearResults}><i  className="fa fa-trash-o" aria-hidden="true"></i>Clear results</button>
                                    
                                    
                                    
                                </div>
                            </form>        
                        )}    
                        </Form>
                <div className = 'section-table'>
                    <h3><i  className="fa fa-file-text-o" aria-hidden="true"></i>Results</h3>
                    {(table_0) ? 
                        <Table 
                            data = {table_0.data}
                            headers = {table_0.headers}
                            defaultPageSize = {5}
                        />: <p><i  className="fa fa-exclamation-circle" aria-hidden="true"></i>{noResults}</p>}
                </div>

            </div>
        );
    }
};

function mapStateToProps(state) {
    return({
        data: state.data,
        results: state.results
    });
}
const mapDispatchToProps = {
    appendResult,
    clearResults
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculate);
