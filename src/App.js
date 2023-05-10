import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    const inputValue = document.getElementById('inputBox').value
    
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === inputValue) {
        console.log (`${inputValue} is already added to phonebook`)
        return
      }
    }


    setNewName(inputValue)
    const person = {
      name: inputValue
    }
    setPersons(persons.concat(person))
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input id='inputBox' />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(person => <p key={person.name}>{person.name}</p>)}

    </div>
  )
}

export default App