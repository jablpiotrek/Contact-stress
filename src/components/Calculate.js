import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Text, Select} from 'react-form';

const tempOptions = [
    {
        label: '22 \xB0C',
        value: 22
    },
    {
        label: '200 \xB0C',
        value: 200
    },
];
const formValidator = (values) => {
        return({
            r: (Number(values.r) >= 14 && Number(values.r) <= 22)? null : 'R not correct',
            h: (Number(values.h) >= 0.1 && Number(values.h) <= 0.3)? null : 'H not correct',
            temp: (values.temp) ? null : 'select temp'
        });
    }

class Calculate extends Component {
    
    constructor(props) {
        super(props);
        this.state = {parameters: null};
    }
    render() {
        
        return (
            <div className = 'calculate'>
                <h1>calculate</h1>
                <div>
                    <Form
                        onSubmit = {values => this.setState({parameters: values})}
                        validateError = {formValidator}
                    >
                        {formApi => (
                            <form onSubmit = {formApi.submitForm} id = 'form'>
                                <Text id ='r' field = 'r'/>
                                <Text id ='h' field = 'h'/>
                                <Select field = 'temp' options={tempOptions}/>
                                <button type="submit">Submit</button>
                                {formApi.submits>0 ? formApi.errors.r : null}
                                {formApi.submits>0 ? formApi.errors.h : null}
                                {formApi.submits>0 ? formApi.errors.temp : null}
                            </form>        
                        )}    
                    </Form>
                </div>
            </div>
        );
    }
};



function mapStateToProps(state) {
    return({data: state.data});
}


export default connect(mapStateToProps)(Calculate);