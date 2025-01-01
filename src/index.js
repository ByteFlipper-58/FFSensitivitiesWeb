//  src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globalStyles.css'
import App from './App';
// import reportWebVitals from './reportWebVitals'; //УДАЛИТЬ ЭТУ СТРОКУ

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals(); //УДАЛИТЬ ЭТУ СТРОКУ