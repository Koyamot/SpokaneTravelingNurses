import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


import './styles/index.scss'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Router>
      <App />,
    </Router>,
  document.getElementById('root')
);

