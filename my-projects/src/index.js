import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {  storeData } from './reduxd/store';






const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <BrowserRouter>
  <Provider store={storeData}>
    <App/> 
    </Provider>
    
  </BrowserRouter>);

