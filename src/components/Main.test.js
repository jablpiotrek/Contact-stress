import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import App from './App';
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <App>
        <Main/>
    </App>, div);
});
