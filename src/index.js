import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Mynav from './pages/Mynav';
import Bshome from './pages/Bs-home';
import Bsabout from './pages/Bs-about';
import Bsservice from './pages/Bs-service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mynav></Mynav>
      <Routes>
        <Route path='/' element={<Bshome/>}/>
        <Route path='/about' element ={<Bsabout/>}></Route>
        <Route path='/service' element = {<Bsservice/>}/>
      </Routes>
    </BrowserRouter>



  </React.StrictMode>
);


