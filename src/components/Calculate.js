import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Text, Select} from 'react-form';
import {appendResult, clearResults} from '../actions/actions.js';

import ndarray from 'ndarray';
import interp from 'ndarray-linear-interpolate';

const tempOptions = [
    {
        label: '22 \xB0C',
        value: 22
    },
    {
        label: '200 \xB0C',
        value: 200
    },
    {
        label: '400 \xB0C',
        value: 400
    },
    {
        label: '600 \xB0C',
        value: 600
    },
    {
        label: '800 \xB0C',
        value: 800
    },
    {
        label: '1000 \xB0C',
        value: 1000
    }
];
const formValidator = (values) => {
        return({
            r: (Number(values.r) >= 14 && Number(values.r) <= 22)? null : 'R not correct',
            h: (Number(values.h) >= 0.1 && Number(values.h) <= 0.3)? null : 'H not correct',
            t: (Number(values.t) >= 22 ) ? null : 'select temp'
        });
    }

class Calculate extends Component {
    
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
        let i = -1;
        const tableHead = parameters.map((parameter) => {
            i++;
            return <th key = {i}>{parameter}</th>
        });
        i = 0;
        const tableData = results.map(result => {
            i++;
            let j = 2;
            return (
                <tr key = {i}>
                    <td key = {0}>{result.r}</td>
                    <td key = {1}>{result.h}</td>
                    <td key = {2}>{result.t}</td>
                    {result.result.map(parameter => {
                        j++;
                        return <td key = {j}>{Number(parameter).toFixed(2)}</td>
                    })}
                </tr>
            );
        });
        return (
            <table>
                <tbody>
                    <tr key = {0}>{tableHead}</tr>
                    {tableData}
                </tbody>
            </table>

        );
    }
    render() {

        return (
            <div className = 'calculate'>
                <h1>calculate</h1>
                <div>
                    <Form
                        onSubmit = {values => {
                            this.sendResultsToStore(values.r, values.h, values.t, this.calculateResults(this.props.data, values.r, values.h, values.t));
                        }}
                        validateError = {formValidator}
                    >
                        {formApi => (
                            <form onSubmit = {formApi.submitForm} id = 'form'>
                                <Text id ='r' field = 'r'/>
                                <Text id ='h' field = 'h'/>
                                <Select field = 't' options={tempOptions}/>
                                <button type="submit">Submit</button>
                                <button type = 'button' onClick = {this.props.clearResults}>Clear calculated data</button>
                                <p>{formApi.submits>0 ? formApi.errors.r : null}</p>
                                <p>{formApi.submits>0 ? formApi.errors.h : null}</p>
                                <p> {formApi.submits>0 ? formApi.errors.t : null}</p>

                            </form>        
                        )}    
                    </Form>

                </div>
                {(this.props.data && this.props.results.length > 0) ? this.rednerResults(this.props.data, this.props.results) : <p>No results to display</p>}
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
