import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App';
import Header from './Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Header/>
  </div>
);



//like the above method but another syntax
//ReactDOM.render(<div></div>,(document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

