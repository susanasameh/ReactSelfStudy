import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import './all.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// root.render(
//   <div className='container'>
//     <Header />
//     <Navbar />
//     <Cards />  {/* add this component to display the cards */}
//     <App />
//     <Footer />
//   </div>
// );



//like the above method but another syntax
//ReactDOM.render(<div></div>,(document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

