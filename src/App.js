import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'  
    }
  ])
  const [newName, setNewName] = useState('')

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
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>name: <input id='txtNombre' /></div>
        <div>number: <input id='txtTlfno' /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>

      {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}

    </div>
  )
}

export default App