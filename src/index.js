import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Base from './styles/elements/base';
import Reset from './styles/generic/reset';
import Spacing from './styles/settings/spacing.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
      <Reset />
      <Base />
      <Spacing />
  </React.StrictMode>,
  document.getElementById('root')
);

