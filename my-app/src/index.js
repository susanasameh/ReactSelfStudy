import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Navbar />
    <App />
    <Footer />
  </div>
);



//like the above method but another syntax
//ReactDOM.render(<div></div>,(document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

