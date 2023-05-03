import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/Home';
import { BrowserRouter } from 'react-router-dom';

// import Temp  from './Temp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
        <Home />
  </BrowserRouter>

);

