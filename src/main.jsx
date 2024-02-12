import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.scss'

import { HomePage } from './views/HomePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);