import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import App from './App';
import Main from './Main';
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <App>
        <Main>
            <Table />
        </Main>
    </App>
    , div);
});
