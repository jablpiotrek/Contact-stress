import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App>
      <Footer />
    </App>
    , div);
});
