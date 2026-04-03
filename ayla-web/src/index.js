import React from 'react';
import ReactDOM from 'react-dom/client';
 
 import Home from './pages/Home';
import Routing from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Routing />
  </React.StrictMode>
);
