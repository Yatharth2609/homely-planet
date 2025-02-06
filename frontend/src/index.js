import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://yourusername.pythonanywhere.com'
  : 'http://localhost:5000';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
