import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Base from './elements/base';
import Reset from './styles/generic/reset';
import Spacing from './settings/spacing.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
      <Reset />
      <Base />
      <Spacing />
  </React.StrictMode>,
  document.getElementById('root')
);

