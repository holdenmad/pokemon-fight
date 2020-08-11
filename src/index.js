import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Grommet} from 'grommet';

import './index.css';
import App from './App';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Grommet theme={theme}>
    <App />
  </Grommet>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

