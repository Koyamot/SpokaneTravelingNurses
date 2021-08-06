import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, AppoloProvider } from '@apollo/client';
import App from './App';


import './styles/index.scss'

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);

