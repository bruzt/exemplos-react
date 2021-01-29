import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './styles/GlobalStyles';

import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>

    <GlobalStyles />

    <Routes />

  </React.StrictMode>,
  document.getElementById('root')
);
