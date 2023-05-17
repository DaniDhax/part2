import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'

axios
.get('https://restcountries.com/v3.1/all')
.then(response => {
  const paises = response.data
  
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <App paises={paises}/>
    </React.StrictMode>
  );
  
  })
  

