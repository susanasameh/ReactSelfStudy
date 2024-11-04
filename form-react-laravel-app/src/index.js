import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// install and import package contain reactRouterDom
//{}mean we use it as export const not default 
import {BrowserRouter as Router} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //add browserRouter to app mean i will use route in app file
  <Router>
  <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

