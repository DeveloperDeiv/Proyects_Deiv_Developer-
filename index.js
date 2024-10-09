import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de que la ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root')); // El elemento debe estar en index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
