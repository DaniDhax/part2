import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'


// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


axios
  .get('https://restcountries.com/v3.1/all')
  .then(response => {
    const pais = response.data[100].name.official
    console.log(pais)
    ReactDOM.render(<div>Hola</div>, document.getElementById('root'))
  })



  // <App pais={pais} />


