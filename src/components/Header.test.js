import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App>
      <Header />
    </App>
    , div);
});
