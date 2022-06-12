import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

