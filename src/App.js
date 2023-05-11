// import { computeHeadingLevel } from '@testing-library/react'
import React, { useState } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState([])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    const personsFiltered = persons.filter(person => person.name.toLowerCase().startsWith((event.target.value).toLowerCase()))
    setFilter (personsFiltered)
    console.log (personsFiltered)
  }

  const addNewName = (event) => {
    event.preventDefault()
    const varNombre = document.getElementById('txtNombre').value
    const varTlfno = document.getElementById('txtTlfno').value
    
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === varNombre) {
        console.log (`${varNombre} is already added to phonebook`)
        alert (`${varNombre} is already added to phonebook`)
        return
      }
    }
    setNewName(varNombre)
    const person = {
      name: varNombre,
      number: varTlfno
    }
    setPersons(persons.concat(person))
    document.getElementById('txtNombre').value = ''
    document.getElementById('txtTlfno').value = ''
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter handleFilterChange={handleFilterChange} />
      
      <h2>add a new</h2>
      <form onSubmit={addNewName}>
        <div>name: <input id='txtNombre' /></div>
        <div>number: <input id='txtTlfno' /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>

        {
        document.getElementById('txtFiltro') && document.getElementById('txtFiltro').value !== '' ? 
        filter.map(person => <p key={person.name}>{person.name} {person.number}</p>)
        : 
        persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
        }
    
    </div>
  )
}

export default App