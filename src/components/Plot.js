import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Select} from 'react-form';
import {updatePlot} from '../actions/actions.js';
import {tempOptions, thicknessOptions, radiusOptions, plotOptions, interpOptions} from './_selectOptions.js';

import Plot3D from './Plot3D.js';

import '../style/css/Plot.css';

class Plot extends Component{
   
    renderSecondSelect(type) {
        switch (type) {
            case 1:
                return (
                    <div>
                        <label htmlFor = 't'>Select temperature gradient peak:</label>
                        <Select field = 't' options = {tempOptions} className = 'little' />
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
                        <Select field = 'r' options = {radiusOptions} />
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
   
    render(){
        return (
            <div className = 'container plot'>
                <h2><i class="fa fa-area-chart" aria-hidden="true"></i>Plot</h2>
                    <Form
                        onSubmit = {(values) => {
                            this.props.updatePlot(values);
                        }}
                        defaultValues = {{interp: 0, type: 1, r: 14, h: 0.1, t: 22}}
                    >
                        {formApi => (
                            <form onSubmit =  {formApi.submitForm} >
                                <div className = 'section properties'>
                                    <h3><i class="fa fa-sliders" aria-hidden="true"></i>Plot properites</h3>
                                    <div>
                                        <label htmlFor="type">Select type of charts:</label>
                                        <Select
                                            field = 'type'
                                            options = {plotOptions}
                                            className = 'big'
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
                                <div className = 'section buttons'>
                                    <button className = 'action' type = 'submit'><i class="fa fa-pencil" aria-hidden="true"></i>
Draw Plot</button>
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
