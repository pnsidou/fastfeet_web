import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from '~/styles/global';
import '~/config/ReactotronConfig';

import history from '~/services/history';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
