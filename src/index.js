import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const courses = {
  id: 1,
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2,
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3,
    },
    {
      name: 'Redux',
      exercises: 11,
      id: 4,
    },

  ],
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App courses={courses}/>
  </React.StrictMode>
);
