import React from 'react';
import ReactDOM from 'react-dom';
import Plot from './Plot';
import App from './App';
import Main from './Main';w
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <App>
        <Main>
            <Plot />
        </Main>
    </App>
    , div);
});
