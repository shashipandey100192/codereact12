import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc, { About1, Contactus } from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abc></Abc>
  <Contactus></Contactus>
  <About1></About1>
  </React.StrictMode>
);


