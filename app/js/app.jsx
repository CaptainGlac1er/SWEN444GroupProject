import React from 'react';
import { render } from 'react-dom';
import Root from 'pages';

window.onload = () => render(<Root />, document.getElementById('react'));

if (module.hot) {
  module.hot.accept('./pages', () => {
    const NewRoot = require('./pages').default; // eslint-disable-line global-require
    render(<NewRoot />, document.getElementById('react'));
  });
}
