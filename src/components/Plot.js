import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Select} from 'react-form';
import {updatePlot} from '../actions/actions.js';
import {tempOptions, thicknessOptions, radiusOptions, plotOptions, interpOptions} from './_selectOptions.js';
import {downloadCanvas} from 'download-canvas';

import Plot3D from './Plot3D.js';

class Plot extends Component{
    getResultsList(data) {
        
        const list = data.data[0].slice(5,data.data[0].length).map((e, index) => {
            return {
                label: e,
                value: index
            };
        });
        return list;
    }
    saveChart() {
        const canvas = document.getElementsByTagName('canvas')[0];
        const options = {
            name : 'plot',
            type : 'jpg',
            qualiy: 1
        }
        if (canvas) {
            let context = canvas.getContext('2d');
            let w = canvas.width;
            let h = canvas.height;
            context.globalCompositeOperation = "destination-over";
            context.fillStyle = 'white';
            context.fillRect(0,0,w,h);
            
            
            downloadCanvas(canvas, options);
        
        
        };
    }
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
        let resultsToDisplay = [];
        if (this.props.data) {
            resultsToDisplay = this.getResultsList(this.props.data);
        }
        return (
            <div className = 'container plot'>
                <h2><i className="fa fa-area-chart" aria-hidden="true"></i>Plot</h2>
                    <Form
                        onSubmit = {(values) => {
                            this.props.updatePlot(values);
                        }}
                        defaultValues = {{interp: 0, type: 1, r: 14, h: 0.1, t: 22, resultToDisplay : 0}}
                    >
                        {formApi => (
                            <form onSubmit =  {formApi.submitForm} >
                                <div className = 'section properties'>
                                    <h3><i className="fa fa-sliders" aria-hidden="true"></i>Plot properites</h3>
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
                                    <div>
                                        <label htmlFor="resultToDisplay">Select result to display:</label>
                                        <Select
                                            className = 'very-big'
                                            field = 'resultToDisplay'
                                            options = {resultsToDisplay}
                                        />
                                    </div>
                                    
                                </div>
                                <div className = 'section buttons'>
                                    <button className = 'action' type = 'submit'><i className="fa fa-pencil" aria-hidden="true"></i>
Draw Plot</button>
                                    <button className = 'action' type = 'button' onClick = {this.saveChart}><i className="fa fa-floppy-o" aria-hidden="true"></i>Capture plot</button>
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
