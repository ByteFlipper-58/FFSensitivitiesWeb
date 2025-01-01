//  src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globalStyles.css'
//import reportWebVitals from './reportWebVitals' //УДАЛИТЬ ЭТУ СТРОКУ

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//reportWebVitals() //УДАЛИТЬ ЭТУ СТРОКУ