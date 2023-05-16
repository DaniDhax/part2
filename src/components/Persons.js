import React from "react";

const Persons = ( {persons, filter} ) => {
    return (
        <div>
            {
                document.getElementById('txtFiltro') && document.getElementById('txtFiltro').value !== '' ?
                    filter.map(person => <p key={person.name}>{person.name} {person.number}</p>)
                    :
                    persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
            }

        </div>
    )
}

export default Persons