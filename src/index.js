import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// Create root element for React rendering
const root = ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div')
);

// Render app with strict mode and router
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



// Enable hot module replacement for development
if (module.hot) {
  module.hot.accept();
}
