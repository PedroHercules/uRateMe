import React from "react";
import { Router } from 'react-router-dom';

import './assets/styles/global.css';

import Routes from './routes';
import history from "./history";

import { AuthProvider } from './Context/authContext';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
