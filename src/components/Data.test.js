import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';
import App from './App';
import Main from './Main';
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <App >
        <Main>
            <Data/>
        </ Main>
    </ App>, div);
});
