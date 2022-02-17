import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Francisco from './Components/Card';
import Navbar from './Components/Navbar';
import Jumbo from './Components/Jumbotron';
import Footer from './Components/Footer'



import reportWebVitals from './reportWebVitals';
import './App.css';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <div className='d-flex justify-content-center'>
    <Jumbo />
    </div>

    <div className="container-fluid row d-flex justify-content-center" >
      <Francisco />
      <Francisco />
      <Francisco />
      <Francisco />
    </div>
    <Footer/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
