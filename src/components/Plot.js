import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Select} from 'react-form';
import {updatePlot} from '../actions/actions.js';
import {tempOptions, thicknessOptions, radiusOptions, plotOptions, interpOptions} from './_selectOptions.js';
import Plot3D from './Plot3D.js';
import interpolateArray from '../externals/interpolate_array.js';

class Plot extends Component{

    renderSecondSelect(type) {
        switch (type) {
            case 1:
                return (
                    <div>
                        <label htmlFor = 't'>Select temperature gradient peak:</label>
                        <Select field = 't' options = {tempOptions} />
                    </div>);
            case 2:
                return (
                    <div>
                        <label htmlFor = 'h'>Select coating thickness:</label>
                        <Select field = 'h' options = {thicknessOptions} />
                    </div>
                );

            case 3:
                return (
                    <div>
                        <label htmlFor = 'r'>Select coating curvature radius:</label>
                        <Select field = 'r' options = {radiusOptions}/>
                    </div>
                );
            default:
                return(
                    <div>
                        <p>Select type of plot...</p>
                    </div>
                );
        }
    }
    componentDidMount() {
        let data = [
            {x: 10, y:1, z:0},
            {x: 10, y:2, z:1},
            {x: 10, y:3, z:2},
            {x: 20, y:1, z:3},
            {x: 20, y:2, z:4},
            {x: 20, y:3, z:5},
            {x: 30, y:1, z:6},
            {x: 30, y:2, z:7},
            {x: 30, y:3, z:8}
        ]
        interpolateArray(data,0);

    }
    render(){
        return (
            <div className = 'container plot'>
                <h2>Plot</h2>
                    <Form
                        onSubmit = {(values) => {
                            this.props.updatePlot(values);
                        }}
                        defaultValues = {{interp: 0, type: 1, r: 14, h: 0.1, t: 22}}
                    >
                        {formApi => (
                            <form onSubmit =  {formApi.submitForm}>
                                <div>
                                    <h3>Plot properites</h3>
                                    <div>
                                        <label htmlFor="type">Select type of charts:</label>
                                        <Select
                                            field = 'type'
                                            options = {plotOptions}
                                        />
                                    </div>
                                    {this.renderSecondSelect(formApi.getFormState().values.type)}
                                    <div>
                                        <label htmlFor="interp">Select interpolation level:</label>
                                        <Select
                                            field = 'interp'
                                            options = {interpOptions}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button type = 'submit'>Draw Plot</button>
                                </div>
                            </form>
                        )}
                    </Form>
                <Plot3D />
            </div>
    );
    }

};

function mapStateToProps(state) {
    return({
        plot: state.plot,
        data: state.data
    });
}
const mapDispatchToProps = {
    updatePlot
}

export default connect(mapStateToProps, mapDispatchToProps)(Plot);
