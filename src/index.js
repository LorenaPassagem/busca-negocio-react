import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Base from './elements/base';
import Reset from './styles/generic/reset';

ReactDOM.render(
  <React.StrictMode>
    <App />
      <Reset />
      <Base />
  </React.StrictMode>,
  document.getElementById('root')
);

