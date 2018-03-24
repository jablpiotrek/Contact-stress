import React from 'react';
import ReactDOM from 'react-dom';
import Calculate from './Calculate';
import Main from './Main';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <App>
        <Main>
          <Calculate/>
        </Main>
      </App>, div);
});
