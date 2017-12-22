import React, {Component} from 'react';
import {Form, Select} from 'react-form';

import {tempOptions, thicknessOptions, radiusOptions, plotOptions, interpOptions} from './_selectOptions.js';


export default class Plot extends Component{

    renderSecondSelect(type) {
        switch (type) {
            case 1:
                return (
                    <div>
                        <p>Select temperature:</p>
                        <Select field = 't' options = {tempOptions} />
                    </div>);
            case 2:
                return (
                    <div>
                        <p>Select coating thickness:</p>
                        <Select field = 'h' options = {thicknessOptions} />
                    </div>
                );

            case 3:
                return (
                    <div>
                        <p>Select coating curvature:</p>
                        <Select field = 'r' options = {radiusOptions}/>
                    </div>
                );
            default:
                return <p>Select type of plot...</p>
        }
    }
    render(){
        return (
            <div className = 'plot'>
                <h1>plot</h1>
                <div>
                    <Form
                        onSubmit = {(values) => {
                            console.log(values)
                        }}

                        defaultValues = {{interp: 0, type: 1, r: 14, h: 0.1, t: 22}}
                    >
                        {formApi => (
                            <form onSubmit =  {formApi.submitForm}>

                                <Select
                                    field = 'type'
                                    options = {plotOptions}
                                />
                                 {this.renderSecondSelect(formApi.getFormState().values.type)}
                                <Select
                                    field = 'interp'
                                    options = {interpOptions}
                                />
                                <p>{(formApi.submits > 0) ? formApi.errors.err : null}</p>
                                <button type = 'submit'>Draw Plot</button>
                            </form>


                        )}
                    </Form>
                </div>
            </div>
    );
    }

};
